import * as Grid from "./grid-business";

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
