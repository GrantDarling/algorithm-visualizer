import * as helpers from "./helpers";

describe("getRandomInteger: gets random integer correctly", () => {
  test("random integer is never above max", () => {
    let randomInteger = helpers.getRandomInteger(0);
    expect(randomInteger).toBe(0);
  });

  test("random integer  with max of 1 is less than or equal to 1", () => {
    let randomInteger = helpers.getRandomInteger(1);
    expect(randomInteger).toBeLessThanOrEqual(1);

    randomInteger = helpers.getRandomInteger(10);
    expect(randomInteger).toBeLessThanOrEqual(10);
  });

  test("random integer  with max of 10 is less than or equal to 10", () => {
    let randomInteger = helpers.getRandomInteger(10);
    expect(randomInteger).toBeLessThanOrEqual(10);
  });
});

//    const { container } = render(<Grid columns={1} rows={1} />);
