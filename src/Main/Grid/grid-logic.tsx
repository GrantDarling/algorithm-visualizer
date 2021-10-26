import { shuffle } from "../../helpers/helpers";
import { generateColor } from "../../helpers/helpers";

import { bubbleSortInit } from "../algorithms/Sorting/BubbleSort/bubbleSortInit";
import { highlightBarsInit, highlightBars } from "../algorithms/inits/inits";

export function createGrid(columns: number, rows: number): number[][] {
  console.log("called!");
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

export const isFinished = () => {
  return true;
};

let isInitialized: boolean = false;
let nextBar: number;
let outerLoop: any;
let currentInnerLoop: any;
let innerLoopMax: any;
let finished: any;

export const bubbleSort = (grid: number[][], heights: number[]) => {
  if (isInitialized === false) {
    isInitialized = true;
    nextBar = highlightBarsInit();
    ({ outerLoop, currentInnerLoop, innerLoopMax, finished } =
      bubbleSortInit(heights));
  }

  currentInnerLoop++;

  if (currentInnerLoop >= innerLoopMax) {
    currentInnerLoop = 1;
    outerLoop++;
    innerLoopMax--;
  }

  if (outerLoop < heights.length) {
    let i: number = currentInnerLoop - 1;

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
      console.log("trapped af");
      //return false;
      buildBars(grid, heights, [0, 0]);
    }
  }

  console.log("never returns");
  buildBars(grid, heights, [0, 0]);
};

/* Selection Sort */

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

    nextBar = highlightBarsInit();
  }

  function resetInnerLoop() {
    advanceInnerLoop++;
    currentInnerLoop = advanceInnerLoop;
    currentMin = heights[currentInnerLoop];
  }

  function advanceOuterLoop() {
    outerLoop++;
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
    advanceOuterLoop();
    resetInnerLoop();

    return buildBars(grid, heights, [currentInnerLoop, currentItem]);
  }

  if (outerLoop >= heights.length) {
    nextBar++;
    if (nextBar < heights.length) {
      return highlightBars(nextBar, grid, heights);
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
