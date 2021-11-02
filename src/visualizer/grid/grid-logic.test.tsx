import * as Grid from "./grid-logic";

describe("createGrid tests:", () => {
  test("1 column x 3 rows", () => {
    const grid = Grid.createGrid(1, 3);
    expect(grid).toEqual(expect.arrayContaining([[0, 1, 2]]));
  });

  test("3 column x 1 rows", () => {
    const grid = Grid.createGrid(3, 1);
    expect(grid).toEqual(expect.arrayContaining([[0], [0], [0]]));
  });

  test("-1 column x -1 rows", () => {
    const grid = Grid.createGrid(-1, -1);
    expect(grid).toEqual(expect.arrayContaining([]));
  });

  test("12 columns x 12 rows (area)", () => {
    const grid = Grid.createGrid(12, 12);
    const gridArea = grid.length * grid[0].length;

    expect(gridArea).toBe(144);
  });
});

describe("initiateBarHeights tests:", () => {
  test("barMaxHeight empty = undefined", () => {
    const heights = Grid.initiateBarHeights([]);
    expect(heights[0]).toBe(undefined);
  });

  test("barMaxHeight is 1 or less with 1 columns", () => {
    const heights = Grid.initiateBarHeights([[0]]);
    expect(heights[0]).toBeLessThanOrEqual(1);
  });

  test("barMaxHeight is 4 or less with 4 columns", () => {
    const heights = Grid.initiateBarHeights([[0], [0], [0], [0]]);
    expect(heights[0]).toBeLessThanOrEqual(4);
  });
});

describe("algorithmSelector tests", () => {
  const grid = [[0], [0], [0]];
  const heights = [1, 2, 3, 4, 5, 6];
  const bubbleSort = [
    { active: true, color: "#f6c26a", height: 1, location: [0] },
    { active: false, color: "#f89f59", height: 2, location: [0] },
    { active: false, color: "#fa7d47", height: 3, location: [0] },
  ];
  const selectionSort = [
    { height: 1, location: [0], color: "#f6c26a", active: true },
    { height: 2, location: [0], color: "#f89f59", active: true },
    { height: 3, location: [0], color: "#fa7d47", active: false },
  ];

  it("returns bubbleSort correctly", () => {
    const returnValue = Grid.algorithmSelector("bubbleSort", grid, heights);
    expect(returnValue).toStrictEqual(bubbleSort);
  });

  it("returns selectionSort correctly", () => {
    const returnValue = Grid.algorithmSelector("selectionSort", grid, heights);
    expect(returnValue).toStrictEqual(selectionSort);
  });

  it("returns undefined if not a value", () => {
    const returnValue = Grid.algorithmSelector("otherSort", grid, heights);
    expect(returnValue).toStrictEqual(undefined);
  });
});
