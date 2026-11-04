import type { LinkItem } from "@/data/profile";

type Props = {
  link: LinkItem;
  count?: number;
  onClick: () => void;
};

export default function LinkCard({ link, count, onClick }: Props) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      // 글래스모피즘: 반투명 흰 배경 + 배경 흐림 + 얇은 밝은 테두리
      className="relative flex w-full items-center justify-center rounded-2xl border border-white/70 bg-white/45 px-14 py-4 text-[15px] font-semibold shadow-[0_6px_24px_-12px_rgba(120,64,36,0.35)] backdrop-blur-xl transition duration-200 ease-out hover:-translate-y-px hover:bg-white/65 hover:shadow-[0_10px_28px_-12px_rgba(120,64,36,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_6px_24px_-12px_rgba(0,0,0,0.6)] dark:hover:bg-white/10"
    >
      <span className="truncate">{link.title}</span>
      {count !== undefined && (
        <span className="absolute right-5 text-xs font-medium tabular-nums text-stone-500 dark:text-stone-400">
          {count.toLocaleString()}회
        </span>
      )}
    </a>
  );
}
