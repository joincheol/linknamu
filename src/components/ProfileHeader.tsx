import type { Profile } from "@/data/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center text-center">
      {profile.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={profile.image}
          alt={`${profile.name} 프로필 사진`}
          className="h-40 w-40 rounded-full border-2 border-zinc-300 object-cover dark:border-zinc-700 sm:h-48 sm:w-48"
        />
      ) : (
        <div
          aria-hidden
          className="flex h-40 w-40 items-center justify-center rounded-full bg-emerald-100 text-4xl font-bold text-emerald-700 dark:bg-emerald-900 dark:text-emerald-200 sm:h-48 sm:w-48"
        >
          {profile.name.slice(0, 1)}
        </div>
      )}
      <h1 className="mt-5 text-2xl font-bold">{profile.name}</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">{profile.bio}</p>
    </header>
  );
}
