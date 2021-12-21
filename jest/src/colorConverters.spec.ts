import { hexToDec, rgbToHsl, getHue, getSat, getLit } from "./colorConverters";

describe("colorConverters.ts", () => {
  interface Cases {
    hex: string;
    rgb: number[];
    hls: number[];
  }

  const cases: Cases[] = [
    // 純色
    { hex: "#000000", rgb: [0, 0, 0], hls: [0, 0, 0] },
    { hex: "#808080", rgb: [128, 128, 128], hls: [0, 0, 50] },
    { hex: "#800000", rgb: [128, 0, 0], hls: [0, 100, 25] },
    { hex: "#ff0000", rgb: [255, 0, 0], hls: [0, 100, 50] },
    { hex: "#008000", rgb: [0, 128, 0], hls: [120, 100, 25] },
    { hex: "#00ff00", rgb: [0, 255, 0], hls: [120, 100, 50] },
    { hex: "#808000", rgb: [128, 128, 0], hls: [60, 100, 25] },
    { hex: "#ffff00", rgb: [255, 255, 0], hls: [60, 100, 50] },
    { hex: "#000080", rgb: [0, 0, 128], hls: [240, 100, 25] },
    { hex: "#0000ff", rgb: [0, 0, 255], hls: [240, 100, 50] },
    { hex: "#800080", rgb: [128, 0, 128], hls: [300, 100, 25] },
    { hex: "#ff00ff", rgb: [255, 0, 255], hls: [300, 100, 50] },
    { hex: "#008080", rgb: [0, 128, 128], hls: [180, 100, 25] },
    { hex: "#00ffff", rgb: [0, 255, 255], hls: [180, 100, 50] },
    { hex: "#c0c0c0", rgb: [192, 192, 192], hls: [0, 0, 75] },
    { hex: "#ffffff", rgb: [255, 255, 255], hls: [0, 0, 100] },
    // カスタムカラー
    { hex: "#171320", rgb: [23, 19, 32], hls: [258, 25, 10] },
    { hex: "#595959", rgb: [89, 89, 89], hls: [0, 0, 35] },
    { hex: "#7e2a2a", rgb: [126, 42, 42], hls: [0, 50, 33] },
    { hex: "#e96767", rgb: [233, 103, 103], hls: [0, 75, 66] },
    { hex: "#2a7e2a", rgb: [42, 126, 42], hls: [120, 50, 33] },
    { hex: "#67e967", rgb: [103, 233, 103], hls: [120, 75, 66] },
    { hex: "#7e702a", rgb: [126, 112, 42], hls: [50, 50, 33] },
    { hex: "#2a387e", rgb: [42, 56, 126], hls: [230, 50, 33] },
    { hex: "#677de9", rgb: [103, 125, 233], hls: [230, 75, 66] },
    { hex: "#542a7e", rgb: [84, 42, 126], hls: [270, 50, 33] },
    { hex: "#a867e9", rgb: [168, 103, 233], hls: [270, 75, 66] },
    { hex: "#2a627e", rgb: [42, 98, 126], hls: [200, 50, 33] },
    { hex: "#67d4e9", rgb: [103, 212, 233], hls: [190, 75, 66] },
    { hex: "#999999", rgb: [153, 153, 153], hls: [0, 0, 60] },
    { hex: "#d9d9d9", rgb: [217, 217, 217], hls: [0, 0, 85] },
  ];

  it("hexToDec", () => {
    cases.forEach(({ hex, rgb }: Cases) => {
      expect(hexToDec(hex)).toEqual(rgb);
    });
  });

  it("getHue", () => {
    cases.forEach(({ rgb, hls }: Cases) => {
      expect(getHue(rgb)).toEqual(hls[0]);
    });
  });

  it("getSat", () => {
    cases.forEach(({ rgb, hls }: Cases) => {
      expect(getSat(rgb)).toEqual(hls[1]);
    });
  });

  it("getLit", () => {
    cases.forEach(({ rgb, hls }: Cases) => {
      expect(getLit(rgb)).toEqual(hls[2]);
    });
  });

  it("rgbToHsl", () => {
    cases.forEach(({ rgb, hls }: Cases) => {
      expect(rgbToHsl(rgb)).toEqual(hls);
    });
  });
});
