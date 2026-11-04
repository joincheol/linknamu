export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  image?: string; // public/ 아래 경로 (예: "/profile.jpg"). 없으면 이니셜 표시
};

export const profile: Profile = {
  name: "조인철",
  bio: "풀스택 개발자 | 새로운 것을 경험하고 배우는 것을 좋아해요",
  image: "/profile.jpg",
};

export const links: LinkItem[] = [
  { id: "github", title: "🐙 깃허브", url: "https://github.com/joincheol" },
  { id: "blog", title: "📝 블로그", url: "https://blog.naver.com/jju161613" },
];
