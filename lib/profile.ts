import profileData from "@/data/profile.json";

export interface ProfileLink {
  label: string;
  url: string;
  detail?: string;
}

export interface Profile {
  name: string;
  tagline: string;
  bio: string;
  interests: string[];
  links: ProfileLink[];
}

export const profile: Profile = profileData;
