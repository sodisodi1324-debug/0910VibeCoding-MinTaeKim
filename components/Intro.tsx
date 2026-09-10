import type { Profile } from "@/lib/profile";

export default function Intro({ name, tagline, bio }: Pick<Profile, "name" | "tagline" | "bio">) {
  return (
    <section className="text-center">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">{tagline}</p>
      <p className="mt-6 leading-relaxed text-gray-700 dark:text-gray-300">{bio}</p>
    </section>
  );
}
