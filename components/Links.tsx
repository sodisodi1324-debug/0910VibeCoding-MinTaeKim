import type { ProfileLink } from "@/lib/profile";
import { pickStickerStyle } from "@/lib/stickerStyles";

export default function Links({ links }: { links: ProfileLink[] }) {
  return (
    <section className="sticker -rotate-1 rounded-[2rem] border-4 border-emerald-300 bg-white px-6 py-6">
      <h2 className="mb-4 inline-block rotate-2 rounded-full border-2 border-emerald-400 bg-emerald-100 px-3 py-1 text-sm text-emerald-800">
        🔗 링크
      </h2>
      <ul className="flex flex-wrap gap-3">
        {links.map((link, i) => {
          const { color, rotate } = pickStickerStyle(i + 2);
          return (
            <li key={link.url}>
              <a
                href={link.url}
                className={`sticker ${rotate} inline-block rounded-2xl border-[3px] px-4 py-2 text-sm font-normal transition-transform hover:-translate-y-1 hover:rotate-0 ${color}`}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
