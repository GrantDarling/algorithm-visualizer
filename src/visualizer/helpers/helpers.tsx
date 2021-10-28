export function shuffle(array: number[]) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export function generateColor(
  colorStart: string,
  colorEnd: string,
  colorCount: number
) {
  function hex(c: any) {
    const s: string = "0123456789abcdef";
    let i: number = parseInt(c);

    if (i === 0 || isNaN(c)) return "00";
    i = Math.round(Math.min(Math.max(0, i), 255));

    return s.charAt((i - (i % 16)) / 16) + s.charAt(i % 16);
  }

  function convertToHex(rgb: number[]) {
    return hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
  }

  function trim(s: any) {
    return s.charAt(0) === "#" ? s.substring(1, 7) : s;
  }

  function convertToRGB(hex: any) {
    const color = [];
    color[0] = parseInt(trim(hex).substring(0, 2), 16);
    color[1] = parseInt(trim(hex).substring(2, 4), 16);
    color[2] = parseInt(trim(hex).substring(4, 6), 16);
    return color;
  }

  const start: any = convertToRGB(colorStart);
  const end: any = convertToRGB(colorEnd);

  const len: number = colorCount - 2;
  const colors: any[] = [];

  let alpha: number = 0.0;

  for (let i: number = 0; i < len; i++) {
    var c: any[] = [];
    alpha += 1.0 / len;

    c[0] = start[0] * alpha + (1 - alpha) * end[0];
    c[1] = start[1] * alpha + (1 - alpha) * end[1];
    c[2] = start[2] * alpha + (1 - alpha) * end[2];

    colors.push("#" + convertToHex(c));
  }

  colors.push(colorStart);
  colors.unshift(colorEnd);

  return colors;
}
