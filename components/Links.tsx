import type { ProfileLink } from "@/lib/profile";

export default function Links({ links }: { links: ProfileLink[] }) {
  return (
    <section className="flex flex-col gap-1 pt-10 border-t border-hairline">
      <h2 className="mb-4 text-[13px] font-medium text-muted tracking-[0.06em] uppercase">링크</h2>
      {links.map((link, i) => (
        <a
          key={link.url}
          href={link.url}
          className={`flex items-baseline justify-between py-3.5 text-[17px] text-link no-underline hover:text-link-hover ${
            i < links.length - 1 ? "border-b border-hairline" : ""
          }`}
          target={link.url.startsWith("http") ? "_blank" : undefined}
          rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          <span>{link.label}</span>
          {link.detail && <span className="text-sm text-muted">{link.detail}</span>}
        </a>
      ))}
    </section>
  );
}
