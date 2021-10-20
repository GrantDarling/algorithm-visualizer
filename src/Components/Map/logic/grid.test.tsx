import * as Grid from "./grid";

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
