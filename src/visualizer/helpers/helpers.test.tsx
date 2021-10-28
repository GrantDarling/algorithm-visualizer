import * as helpers from "./helpers";

describe("shuffle test:", () => {
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

describe("something", () => {
  test("something", () => {});
});
