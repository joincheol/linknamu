"use client";

import { useEffect, useState } from "react";
import type { LinkItem } from "@/data/profile";
import LinkCard from "./LinkCard";

export default function LinkList({ links }: { links: LinkItem[] }) {
  // null이면 클릭 수를 불러오지 못한 상태 (DB 미설정 등) → 숫자를 숨김
  const [counts, setCounts] = useState<Record<string, number> | null>(null);

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => (res.ok ? res.json() : null))
      .then(setCounts)
      .catch(() => setCounts(null));
  }, []);

  const recordClick = (id: string) => {
    // 새 탭으로 이동하는 중에도 요청이 끊기지 않도록 sendBeacon 사용
    const body = new Blob([JSON.stringify({ id })], { type: "application/json" });
    if (!navigator.sendBeacon?.("/api/clicks", body)) {
      fetch("/api/clicks", { method: "POST", body, keepalive: true }).catch(() => {});
    }
    setCounts((prev) => (prev ? { ...prev, [id]: (prev[id] ?? 0) + 1 } : prev));
  };

  return (
    <ul className="flex flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            link={link}
            count={counts ? (counts[link.id] ?? 0) : undefined}
            onClick={() => recordClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
