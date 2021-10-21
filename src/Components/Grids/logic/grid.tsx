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

/* Sorting Grid */

export function assignBarHeights(grid: number[][]) {
  const barMaxHeight = grid[0].length;
  let heights: number[] = [];

  for (let random: number = 0; random < grid.length; random++) {
    const height: number = getRandomInteger(barMaxHeight);
    heights.push(height);
  }
  return heights;
}

export function buildBars(grid: number[][], heights: number[]) {
  interface Bar {
    height: number;
    location: number[];
  }

  let bars: Bar[] = [];

  grid.map((col, idx) => {
    let temp_bar: Bar = {
      height: heights[idx],
      location: col,
    };

    return bars.push(temp_bar);
  });

  return bars;
}
