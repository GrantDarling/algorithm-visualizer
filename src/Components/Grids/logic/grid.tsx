import { getRandomInteger } from "../../Helpers/helpers";

export function createGrid(columns: number, rows: number): number[][] {
  let grid: number[][] = [];

  if (rows <= 1) rows = 1;
  if (columns <= 1) columns = 1;

  for (let column: number = 0; column < columns; column++) {
    let temp_column = [];
    for (let row: number = 0; row < rows; row++) {
      temp_column.push(row);
    }
    grid.push(temp_column);
  }
  return grid;
}

/* Sorting Grid Functions */

export function assignColumnHeights(grid: number[][]) {
  const columnMaxHeight = grid[0].length;
  let heights: number[] = [];

  for (let random: number = 0; random < grid.length; random++) {
    const height: number = getRandomInteger(columnMaxHeight);
    heights.push(height);
  }
  return heights;
}
