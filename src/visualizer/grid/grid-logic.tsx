import { shuffle } from "../helpers/helpers";
import { generateColor } from "../helpers/helpers";
import { bubbleSort } from "../algorithms/bubbleSort";
import { selectionSort } from "../algorithms/selectionSort";

interface Bar {
  height: number;
  location: number[];
  color: string;
  active: boolean;
}

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

function buildColors(heights: number[]) {
  const colorStart = "#ff3825";
  const colorEnd = "#f4e57c";
  const colorsLength = heights.length + 1;
  return generateColor(colorStart, colorEnd, colorsLength);
}

let colors: string[] = [];

export function buildBars(
  grid: number[][],
  heights: number[],
  active: number[]
) {
  if (colors.length !== heights.length + 1) colors = buildColors(heights);
  let bars: Bar[] = [];
  grid.map((column_length, idx) => {
    let temp_bar: Bar = {
      height: heights[idx],
      location: column_length,
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

export const algorithmSelector = (
  algorithm: string,
  grid: number[][],
  heights: number[]
) => {
  switch (algorithm) {
    case "bubbleSort":
      return bubbleSort(grid, heights);
    case "selectionSort":
      return selectionSort(grid, heights);
    default:
      return undefined;
  }
};
