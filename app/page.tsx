import { profile } from "@/lib/profile";
import Intro from "@/components/Intro";
import Interests from "@/components/Interests";
import Links from "@/components/Links";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-10 px-6 py-16 sm:py-24">
      <Intro name={profile.name} tagline={profile.tagline} bio={profile.bio} />
      <Interests interests={profile.interests} />
      <Links links={profile.links} />
    </main>
  );
}
