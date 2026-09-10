export default function Interests({ interests }: { interests: string[] }) {
  return (
    <section className="flex flex-col gap-5 pt-10 border-t border-hairline">
      <h2 className="text-[13px] font-medium text-muted tracking-[0.06em] uppercase">관심사</h2>
      <div className="flex flex-wrap gap-2">
        {interests.map((interest) => (
          <span
            key={interest}
            className="rounded-full bg-pill px-3.5 py-1.5 text-[15px] text-foreground"
          >
            {interest}
          </span>
        ))}
      </div>
    </section>
  );
}
