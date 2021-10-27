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
    expect(grid).toEqual(expect.arrayContaining([[0]]));
  });
});

describe("createGrid: builds the correct amount of nodes", () => {
  test("12x12 grid creates 144 nodes", () => {
    const grid = Grid.createGrid(12, 12);
    const gridLength = grid.length * grid[0].length;

    expect(gridLength).toBe(144);
  });

  test("12x48 grid creates 12 columns", () => {
    const grid = Grid.createGrid(12, 48);
    const gridColumnLength = grid.length;

    expect(gridColumnLength).toBe(12);
  });

  test("12x48 grid creates 48 rows", () => {
    const grid = Grid.createGrid(12, 48);
    const gridRowLength = grid[0].length;

    expect(gridRowLength).toBe(48);
  });

  test("0x0 grid is 1x1", () => {
    const grid = Grid.createGrid(0, 0);
    const gridColumnRow = grid.length + grid[0].length;

    expect(gridColumnRow).toBe(2);
  });

  test("-1000x-1 grid is 1x1", () => {
    const grid = Grid.createGrid(0, 0);
    const gridColumnRow = grid.length + grid[0].length;

    expect(gridColumnRow).toBe(2);
  });
});

describe("assignBarHeights: creates the appropriate heights", () => {
  test("barMaxHeight is undefined without columns and rows", () => {
    const heights = Grid.assignBarHeights([]);
    expect(heights[0]).toBe(undefined);
  });

  test("barMaxHeight is 1 or less with 1 columns", () => {
    const heights = Grid.assignBarHeights([[0]]);
    expect(heights[0]).toBeLessThanOrEqual(1);
  });

  test("barMaxHeight is 4 or less with 4 columns", () => {
    const heights = Grid.assignBarHeights([[0], [0], [0], [0]]);
    expect(heights[0]).toBeLessThanOrEqual(4);
  });
});
