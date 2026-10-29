"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
    setIsDark(next);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark ?? false}
      aria-label="다크 모드"
      onClick={toggle}
      // 테마 확인 전에는 숨겨서 스위치가 잘못된 위치로 깜빡이지 않게 함
      className={`relative inline-flex h-8 w-16 shrink-0 items-center rounded-full border-2 border-zinc-300 bg-zinc-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-zinc-600 dark:bg-zinc-700 ${isDark === null ? "invisible" : ""}`}
    >
      <span
        aria-hidden
        className="relative grid h-6 w-6 translate-x-0.5 place-items-center rounded-full bg-white shadow transition-transform duration-300 dark:translate-x-[2.125rem] dark:bg-zinc-900"
      >
        {/* 해/달 아이콘은 겹쳐 두고 회전·투명도로 전환 */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          className="absolute h-3.5 w-3.5 text-amber-500 transition-all duration-300 dark:rotate-90 dark:scale-0 dark:opacity-0"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute h-3.5 w-3.5 -rotate-90 scale-0 text-indigo-300 opacity-0 transition-all duration-300 dark:rotate-0 dark:scale-100 dark:opacity-100"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </span>
    </button>
  );
}
