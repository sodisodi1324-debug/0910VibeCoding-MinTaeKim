import { pickStickerStyle } from "@/lib/stickerStyles";

export default function Interests({ interests }: { interests: string[] }) {
  return (
    <section className="sticker rotate-1 rounded-[2rem] border-4 border-sky-300 bg-white px-6 py-6">
      <h2 className="mb-4 inline-block -rotate-2 rounded-full border-2 border-sky-400 bg-sky-100 px-3 py-1 text-sm text-sky-800">
        ✏️ 관심사
      </h2>
      <ul className="flex flex-wrap gap-3">
        {interests.map((interest, i) => {
          const { color, rotate } = pickStickerStyle(i);
          return (
            <li
              key={interest}
              className={`sticker ${rotate} rounded-full border-[3px] border-dashed px-4 py-2 text-sm font-normal ${color}`}
            >
              {interest}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
