export const hexToDec = (hex: string): number[] =>
  [hex.substr(1, 2), hex.substr(3, 2), hex.substr(5, 2)].map((v) =>
    parseInt(v, 16)
  );

export const rgbToHsl = (rgb: number[]): number[] => {
  const [r, g, b] = rgb;
  const max = Math.max(...rgb);
  const min = Math.min(...rgb);
  const sum = max + min;
  const diff = max - min;
  let hue = 0;

  const lightness = sum / 2;
  const saturation = lightness >= 128 ? diff / (510 - sum) : diff / sum;

  if (r === b && b === g) {
    hue = 0; // 3つの値が同じなら0
  } else if (r === max) {
    hue = 60 * ((g - b) / diff);
  } else if (g === max) {
    hue = 60 * ((b - r) / diff) + 120;
  } else if (b === max) {
    hue = 60 * ((r - g) / diff) + 240;
  }

  return [
    Math.round(hue) + (hue < 0 ? 360 : 0),
    Math.round(saturation * 100) || 0,
    Math.round(lightness / (255 / 100)),
  ];
};

export const getHue = (rgb: number[]): number => {
  const [r, g, b] = rgb;
  const max = Math.max(...rgb);
  const min = Math.min(...rgb);

  // 3つとも同じ値なら0を返す
  if (r === b && b === g) {
    return 0;
  }

  const diff = max - min;
  let hue = 0;

  if (r === max) {
    hue = 60 * ((g - b) / diff);
  } else if (g === max) {
    hue = 60 * ((b - r) / diff) + 120;
  } else if (b === max) {
    hue = 60 * ((r - g) / diff) + 240;
  }

  return Math.round(hue) + (hue < 0 ? 360 : 0);
};

export const getSat = (rgb: number[]): number => {
  const max = Math.max(...rgb);
  const min = Math.min(...rgb);
  const cnt = (max + min) / 2;

  const sat =
    cnt >= 128
      ? (max - min) / (510 - max - min) || 0
      : (max - min) / (max + min) || 0;

  return Math.round(sat * 100);
};

export const getLit = (rgb: number[]): number => {
  const max = Math.max(...rgb);
  const min = Math.min(...rgb);
  const cnt = (max + min) / 2;

  return Math.round(cnt / (255 / 100));
};
