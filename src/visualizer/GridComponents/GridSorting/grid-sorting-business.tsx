import { shuffle } from "../../Helpers/helpers";
import { generateColorGradientArray } from "../../Helpers/helpers";
import { bubbleSort } from "../../Algorithms/bubbleSort";
import { selectionSort } from "../../Algorithms/selectionSort";
import { heapSort } from "../../Algorithms/heapSort";

interface Bar {
  height: number;
  location: number[];
  color: string;
  active: boolean;
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
  return generateColorGradientArray(colorStart, colorEnd, colorsLength);
}

let colors: string[] = [];

export function buildBars(
  grid: number[][],
  heights: number[],
  active: number[]
) {
  let isActive = (idx: any) => {
    for (const activeIdx of active) {
      if (heights[idx] === heights[activeIdx]) return true;
    }
    return false;
  };

  if (colors.length !== heights.length + 1) colors = buildColors(heights);
  let bars: Bar[] = [];
  grid.map((column_length, idx) => {
    let temp_bar: Bar = {
      height: heights[idx],
      location: column_length,
      color: colors[heights[idx]],
      active: isActive(idx),
    };
    return bars.push(temp_bar);
  });

  return bars;
}

export const algorithmSelector = (
  algorithm: string,
  grid: number[][],
  heights: number[],
  restart: boolean
) => {
  switch (algorithm) {
    case "bubbleSort":
      return bubbleSort(grid, heights, restart);
    case "selectionSort":
      return selectionSort(grid, heights, restart);
    case "heapSort":
      return heapSort(grid, heights, restart);
    default:
      return undefined;
  }
};
