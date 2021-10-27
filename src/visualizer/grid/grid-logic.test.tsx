import * as Grid from "./grid-logic";

describe("createGrid Tests:", () => {
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

describe("initiateBarHeights Tests:", () => {
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
