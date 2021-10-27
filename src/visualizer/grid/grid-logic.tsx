import { shuffle } from "../../helpers/helpers";
import { generateColor } from "../../helpers/helpers";

import { highlightBarsInit, highlightBars } from "../algorithms/highlightBars";

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

  console.log("heights before: ", heights);
  shuffle(heights);
  console.log("heights after: ", heights);
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

  console.log("SOMETHING");
  const colorStart = "#ff3825";
  const colorEnd = "#f4e57c";
  const colorsLen = heights.length + 1;

  colors = generateColor(colorStart, colorEnd, colorsLen);

  let bars: Bar[] = [];

  grid.map((col, idx) => {
    console.log(colors);
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

/* Selection Sort */

let isInitialized: boolean = false;
let cycleBars: number;
let outerLoop: any;
let currentInnerLoop: any;
let innerLoopMax: any;
let finished: any;
let currentMin: any;
let currentItem: any;
let advanceInnerLoop: number = 0;

const selectionSortInit = (bars: number[]) => {
  let currentInnerLoop: number = 0;
  let outerLoop: number = 0;
  let currentMin: number = bars[0];
  let finished: boolean = false;

  return {
    currentInnerLoop,
    outerLoop,
    currentMin,
    currentItem,
    finished,
  };
};

export const selectionSort = (grid: number[][], heights: number[]) => {
  function initialize() {
    isInitialized = true;

    ({ outerLoop, currentInnerLoop, currentMin, currentItem, finished } =
      selectionSortInit(heights));

    cycleBars = highlightBarsInit();
  }

  function resetInnerLoop() {
    advanceInnerLoop++;
    currentInnerLoop = advanceInnerLoop;
    currentMin = heights[currentInnerLoop];
  }

  function swap() {
    let currentMinHeight: any = heights[heights.indexOf(currentMin)];
    heights[heights.indexOf(currentMin)] = heights[outerLoop];
    heights[outerLoop] = currentMinHeight;
  }

  if (!isInitialized) initialize();

  currentInnerLoop++;

  if (currentInnerLoop >= heights.length && outerLoop < heights.length) {
    swap();
    outerLoop++;
    resetInnerLoop();
    return buildBars(grid, heights, [currentInnerLoop, currentItem]);
  }

  if (outerLoop >= heights.length) {
    cycleBars++;
    if (cycleBars < heights.length) {
      return highlightBars(cycleBars, grid, heights);
    }
  }

  if (currentInnerLoop < heights.length && outerLoop < heights.length) {
    let currentItem = currentInnerLoop;
    let minIdx: any = heights.indexOf(currentMin);

    if (heights[currentItem] < currentMin) {
      currentMin = heights[currentItem];
      let x: any = buildBars(grid, heights, [minIdx, currentItem]);
      return x;
    }
    return buildBars(grid, heights, [minIdx, currentItem]);
  }
};
