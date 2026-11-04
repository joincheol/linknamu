import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";

// wireframe.png 배치: 원형 프로필 사진 → 이름 → 한 줄 소개 → 세로 링크 카드
export default function Home() {
  return (
    <main className="flex min-h-screen justify-center px-6 pb-16 pt-20 sm:pt-24">
      <div className="fixed right-5 top-5 z-10">
        <ThemeToggle />
      </div>

      <div className="flex w-full max-w-[420px] flex-col">
        <ProfileHeader profile={profile} />

        <div className="mt-10">
          <LinkList links={links} />
        </div>
      </div>
    </main>
  );
}
