import * as helpers from "./helpers";

describe("Helper Tests:", () => {
  describe("shuffle() tests:", () => {
    it("maintains the array length", () => {
      const array = [1, 2, 3, 4, 5, 6];
      const shuffledArray = helpers.shuffle(array);
      expect(shuffledArray.length).toBe(6);
    });

    it("contains the same amount of elements", () => {
      const array = [1, 2, 3, 4, 5, 6];
      const shuffledArray = helpers.shuffle(array);
      expect(array).toEqual(expect.arrayContaining(shuffledArray));
    });

    it("is not the same array values after shuffled", () => {
      const array = [1, 2, 3, 4, 5, 6];
      const shuffledArray = helpers.shuffle(Array.from(array));
      expect(array).not.toEqual(shuffledArray);
    });
  });

  describe("generateColorGradientArray() tests:", () => {
    const colorStart = "#ff3825";
    const colorEnd = "#f4e57c";
    const colorsLength = 10;

    it("returns an array of the correct size", () => {
      const colorsArray = helpers.generateColorGradientArray(
        colorStart,
        colorEnd,
        colorsLength
      );
      expect(colorsArray.length).toBe(colorsLength);
    });

    it("has the correct first element", () => {
      const colorsArray = helpers.generateColorGradientArray(
        colorStart,
        colorEnd,
        colorsLength
      );
      expect(colorsArray[0]).toBe(colorEnd);
    });

    it("has the correct last element", () => {
      const colorsArray = helpers.generateColorGradientArray(
        colorStart,
        colorEnd,
        colorsLength
      );
      expect(colorsArray[colorsArray.length - 1]).toBe(colorStart);
    });
  });
});
