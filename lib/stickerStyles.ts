// 문방구 스티커 느낌을 내기 위한 파스텔 색상 / 회전 각도 순환 팔레트.
// Tailwind가 클래스를 정적으로 스캔할 수 있도록 완성된 클래스 문자열만 사용한다.

export const stickerColors = [
  "bg-pink-200 border-pink-400 text-pink-900",
  "bg-amber-200 border-amber-400 text-amber-900",
  "bg-emerald-200 border-emerald-400 text-emerald-900",
  "bg-sky-200 border-sky-400 text-sky-900",
  "bg-purple-200 border-purple-400 text-purple-900",
  "bg-orange-200 border-orange-400 text-orange-900",
];

export const stickerRotations = [
  "-rotate-3",
  "rotate-2",
  "-rotate-2",
  "rotate-3",
  "-rotate-1",
  "rotate-1",
];

export function pickStickerStyle(index: number) {
  return {
    color: stickerColors[index % stickerColors.length],
    rotate: stickerRotations[index % stickerRotations.length],
  };
}
