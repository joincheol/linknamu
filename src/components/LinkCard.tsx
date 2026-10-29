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
      className="flex min-h-20 w-full items-center justify-between gap-3 rounded-2xl border-2 border-zinc-300 bg-white px-5 py-4 font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900"
    >
      <span className="truncate">{link.title}</span>
      {count !== undefined && (
        <span className="shrink-0 text-sm text-zinc-500 dark:text-zinc-400">
          {count.toLocaleString()}회
        </span>
      )}
    </a>
  );
}
