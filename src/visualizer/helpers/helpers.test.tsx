import * as helpers from "./helpers";

describe("shuffle tests:", () => {
  test("maintain array length", () => {
    const array = [1, 2, 3, 4, 5, 6];
    const shuffledArray = helpers.shuffle(array);
    expect(shuffledArray.length).toBe(6);
  });

  test("array contains the same elements", () => {
    const array = [1, 2, 3, 4, 5, 6];
    const shuffledArray = helpers.shuffle(array);
    expect(array).toEqual(expect.arrayContaining(shuffledArray));
  });
});

describe("generateColor tests:", () => {
  const colorStart = "#ff3825";
  const colorEnd = "#f4e57c";
  const colorsLength = 10;

  test("returns an array of the correct size", () => {
    const colorsArray = helpers.generateColor(
      colorStart,
      colorEnd,
      colorsLength
    );
    expect(colorsArray.length).toBe(colorsLength);
  });

  test("first element is correct color", () => {
    const colorsArray = helpers.generateColor(
      colorStart,
      colorEnd,
      colorsLength
    );
    expect(colorsArray[0]).toBe(colorEnd);
  });

  test("last element is correct color", () => {
    const colorsArray = helpers.generateColor(
      colorStart,
      colorEnd,
      colorsLength
    );
    expect(colorsArray[colorsArray.length - 1]).toBe(colorStart);
  });
});
