export default function Interests({ interests }: { interests: string[] }) {
  return (
    <section>
      <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
        Interests
      </h2>
      <ul className="mt-3 flex flex-wrap gap-2">
        {interests.map((interest) => (
          <li
            key={interest}
            className="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm text-gray-700 dark:text-gray-200"
          >
            {interest}
          </li>
        ))}
      </ul>
    </section>
  );
}
