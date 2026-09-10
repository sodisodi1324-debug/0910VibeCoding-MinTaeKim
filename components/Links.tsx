import type { ProfileLink } from "@/lib/profile";

export default function Links({ links }: { links: ProfileLink[] }) {
  return (
    <section>
      <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
        Links
      </h2>
      <ul className="mt-3 flex flex-wrap gap-3">
        {links.map((link) => (
          <li key={link.url}>
            <a
              href={link.url}
              className="inline-block rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
              target={link.url.startsWith("http") ? "_blank" : undefined}
              rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
