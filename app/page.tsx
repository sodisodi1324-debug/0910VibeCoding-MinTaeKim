import { profile } from "@/lib/profile";
import Intro from "@/components/Intro";
import Interests from "@/components/Interests";
import Links from "@/components/Links";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-[600px] flex-1 flex-col gap-[72px] px-6 py-24 sm:py-[96px]">
      <Intro name={profile.name} tagline={profile.tagline} bio={profile.bio} />
      <Interests interests={profile.interests} />
      <Links links={profile.links} />
    </main>
  );
}
