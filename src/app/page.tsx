import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";

// wireframe.png 배치: 원형 프로필 사진 → 이름 → 한 줄 소개 → 세로 링크 카드
export default function Home() {
  return (
    <main className="flex min-h-screen justify-center px-4 pb-6 pt-16 sm:pb-12">
      <div className="fixed right-4 top-4 z-10">
        <ThemeToggle />
      </div>

      <div className="flex w-full max-w-md flex-col rounded-[2.5rem] border-2 border-zinc-300 bg-white px-6 py-10 shadow-sm dark:border-zinc-700 dark:bg-zinc-950 sm:px-8">
        <ProfileHeader profile={profile} />

        <div className="mt-8">
          <LinkList links={links} />
        </div>
      </div>
    </main>
  );
}
