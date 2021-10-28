import { shuffle } from "../helpers/helpers";
import { generateColor } from "../helpers/helpers";

export function createGrid(columns: number, rows: number): number[][] {
  let grid: number[][] = [];

  if (rows <= 0) rows = 0;
  if (columns <= 0) columns = 0;

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
export function initiateBarHeights(grid: number[][]) {
  let heights: number[] = [];
  let counter: number = 0;

  for (let random: number = 0; random < grid.length; random++) {
    counter++;
    const height: number = counter;
    heights.push(height);
  }

  shuffle(heights);
  return heights;
}

let colors: any[] = [];

export function buildBars(
  grid: number[][],
  heights: number[],
  active: number[]
) {
  interface Bar {
    height: number;
    location: number[];
    color: string;
    active: boolean;
  }

  if (colors.length !== heights.length) {
    const colorStart = "#ff3825";
    const colorEnd = "#f4e57c";
    const colorsLength = heights.length + 1;

    colors = generateColor(colorStart, colorEnd, colorsLength);
  }

  let bars: Bar[] = [];

  grid.map((col, idx) => {
    let temp_bar: Bar = {
      height: heights[idx],
      location: col,
      color: colors[heights[idx]],
      active:
        heights[idx] === heights[active[0]] ||
        heights[idx] === heights[active[1]]
          ? true
          : false,
    };

    return bars.push(temp_bar);
  });

  return bars;
}
