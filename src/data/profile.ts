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

// TODO: 보여 주기용 더미 값 — 실제 프로필과 링크로 교체하세요.
export const profile: Profile = {
  name: "홍길동",
  bio: "개발하고 글 쓰는 사람",
  image: "/profile-placeholder.svg",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "blog", title: "블로그", url: "https://velog.io" },
  { id: "instagram", title: "Instagram", url: "https://instagram.com" },
];
