import type { Profile } from "@/lib/profile";

export default function Intro({ name, tagline, bio }: Pick<Profile, "name" | "tagline" | "bio">) {
  return (
    <section className="sticker relative -rotate-2 rounded-[2rem] border-4 border-pink-300 bg-white px-8 py-10 text-center">
      <span className="absolute -top-5 -left-4 -rotate-12 text-4xl select-none">⭐</span>
      <span className="absolute -top-4 -right-5 rotate-12 text-4xl select-none">💫</span>
      <span className="absolute -bottom-5 right-6 rotate-6 text-3xl select-none">💖</span>

      <h1 className="text-4xl sm:text-5xl font-bold text-pink-500 [text-shadow:2px_2px_0_#fff,-2px_-2px_0_#fff,2px_-2px_0_#fff,-2px_2px_0_#fff]">
        {name}
      </h1>
      <p className="mt-3 inline-block rotate-1 rounded-full border-2 border-amber-300 bg-amber-100 px-4 py-1 text-sm text-amber-800">
        {tagline}
      </p>
      <p className="mt-6 leading-relaxed text-neutral-700">{bio}</p>
    </section>
  );
}
