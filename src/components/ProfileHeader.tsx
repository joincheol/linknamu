import type { Profile } from "@/data/profile";

type ProfileHeaderProps = {
  profile: Profile;
  size?: number; // 원형 프로필 사진 지름(px), 기본 150
};

export default function ProfileHeader({ profile, size = 150 }: ProfileHeaderProps) {
  const imageStyle = { width: size, height: size };

  return (
    <header className="flex flex-col items-center text-center">
      {profile.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={profile.image}
          alt={`${profile.name} 프로필 사진`}
          width={size}
          height={size}
          style={imageStyle}
          // 세로 사진은 아래쪽을 잘라 얼굴이 원 가운데 오도록 위쪽 기준으로 맞춤
          className="shrink-0 rounded-full object-cover object-top shadow-[0_18px_40px_-14px_rgba(120,64,36,0.55)] ring-4 ring-white/80 dark:shadow-[0_18px_40px_-14px_rgba(0,0,0,0.8)] dark:ring-white/10"
        />
      ) : (
        <div
          aria-hidden
          style={{ ...imageStyle, fontSize: size * 0.3 }}
          className="flex shrink-0 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-700 shadow-[0_18px_40px_-14px_rgba(120,64,36,0.55)] ring-4 ring-white/80 dark:bg-orange-950 dark:text-orange-200 dark:ring-white/10"
        >
          {profile.name.slice(0, 1)}
        </div>
      )}
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{profile.name}</h1>
      <p className="mt-2 text-[15px] leading-relaxed text-stone-600 dark:text-stone-400">{profile.bio}</p>
    </header>
  );
}
