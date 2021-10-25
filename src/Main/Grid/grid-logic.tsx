import { shuffle } from "../../helpers/helpers";
import { generateColor } from "../../helpers/helpers";

import { bubbleSortInit } from "../algorithms/Sorting/BubbleSort/bubbleSortInit";
import { highlightBarsInit, highlightBars } from "../algorithms/general/inits";

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

  if (colors.length === 0) {
    const colorStart = "#ff3825";
    const colorEnd = "#f4e57c";
    const colorsLen = heights.length + 1;

    colors = generateColor(colorStart, colorEnd, colorsLen);
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

let isInitialized: boolean = false;
let nextBar: number;
let outerLoop: any;
let innerLoopCurrent: any;
let innerLoopMax: any;
let finished: any;

export const bubbleSort = (grid: number[][], heights: number[]) => {
  if (isInitialized === false) {
    isInitialized = true;
    nextBar = highlightBarsInit();
    ({ outerLoop, innerLoopCurrent, innerLoopMax, finished } =
      bubbleSortInit(heights));
  }

  innerLoopCurrent++;

  if (innerLoopCurrent >= innerLoopMax) {
    innerLoopCurrent = 1;
    outerLoop++;
    innerLoopMax--;
  }

  if (outerLoop < heights.length) {
    let i: number = innerLoopCurrent - 1;

    if (heights[i] > heights[i + 1]) {
      let x: any = buildBars(grid, heights, [i, i - 1]);
      [heights[i], heights[i + 1]] = [heights[i + 1], heights[i]];
      return x;
    }

    return buildBars(grid, heights, [i, i - 1]);
  } else {
    finished = true;
  }

  if (finished) {
    nextBar++;
    if (nextBar < heights.length) {
      return highlightBars(nextBar, grid, heights);
    } else {
      return buildBars(grid, heights, [0, 0]);
    }
  }

  console.log("never returns");
  return heights;
};

/* Bubble Sort */

let currentMin: any;
let currentItem: any;

const selectionSortInit = (bars: number[]) => {
  let innerLoopCurrent: number = 0;
  let outerLoop: number = 0;
  currentMin = 10;
  currentItem = 15;
  let finished: boolean = false;

  return { innerLoopCurrent, outerLoop, currentMin, currentItem, finished };
};

export const selectionSort = (grid: number[][], heights: number[]) => {
  if (isInitialized === false) {
    isInitialized = true;
    nextBar = highlightBarsInit();

    ({ outerLoop, innerLoopCurrent, currentMin, currentItem, finished } =
      selectionSortInit(heights));
  }

  innerLoopCurrent++;

  if (innerLoopCurrent >= innerLoopMax) {
    innerLoopCurrent = 1;
    outerLoop++;
    innerLoopMax--;
  }

  if (outerLoop < heights.length) {
    let i: number = innerLoopCurrent - 1;
    let currentMin = heights[outerLoop];

    for (let j = i; j < heights.length; j++) {
      let currentItem = heights[j];

      if (currentItem < currentMin) {
        let x: any = buildBars(grid, heights, [currentMin, j]);
        currentMin = currentItem;
        [heights[outerLoop], heights[j]] = [heights[j], heights[outerLoop]];
        return x;
      }
      return buildBars(grid, heights, [currentMin, j]);
    }
  }

  // for (let i = 0; i < heights.length; i++) {
  //   let currentMin = heights[i];
  // }

  return buildBars(grid, heights, [currentMin, currentItem]);

  // else {
  //   finished = true;
  // }

  if (finished) {
    nextBar++;
    if (nextBar < heights.length) {
      return highlightBars(nextBar, grid, heights);
    } else {
      return buildBars(grid, heights, [0, 0]);
    }
  }

  console.log("never returns");
  return heights;
};
