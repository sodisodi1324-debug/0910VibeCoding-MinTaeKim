import type { Profile } from "@/lib/profile";

export default function Intro({ name, tagline, bio }: Pick<Profile, "name" | "tagline" | "bio">) {
  return (
    <section className="flex flex-col gap-[18px]">
      <h1 className="m-0 text-5xl sm:text-[64px] font-semibold tracking-[-0.025em] leading-[1.05]">
        {name}
      </h1>
      <p className="m-0 text-xl sm:text-[21px] font-normal text-muted tracking-[-0.01em]">
        {tagline}
      </p>
      <p className="mt-2 text-[17px] leading-[1.65] text-foreground text-pretty">{bio}</p>
    </section>
  );
}
