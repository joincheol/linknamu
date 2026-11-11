"use client";

import { useEffect, useState } from "react";
import type { LinkItem } from "@/data/profile";
import LinkCard from "./LinkCard";

export default function LinkList({ links }: { links: LinkItem[] }) {
  // 데이터를 받기 전에는 빈 객체 → 모든 카드가 0회로 표시됨
  const [counts, setCounts] = useState<Record<string, number>>({});

  // 페이지가 열릴 때 모든 링크의 클릭 수를 한 번에 가져옴
  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => (res.ok ? res.json() : null))
      .then((data: Record<string, number> | null) => {
        if (data) setCounts(data);
      })
      .catch(() => {});
  }, []);

  const recordClick = (id: string) => {
    // 새 탭으로 이동하는 중에도 요청이 끊기지 않도록 sendBeacon 사용
    const body = new Blob([JSON.stringify({ id })], { type: "application/json" });
    if (!navigator.sendBeacon?.("/api/clicks", body)) {
      fetch("/api/clicks", { method: "POST", body, keepalive: true }).catch(() => {});
    }
    // 서버 응답을 기다리지 않고 화면의 숫자를 바로 1 올림
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  };

  return (
    <ul className="flex flex-col gap-3.5">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            link={link}
            count={counts[link.id] ?? 0}
            onClick={() => recordClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
