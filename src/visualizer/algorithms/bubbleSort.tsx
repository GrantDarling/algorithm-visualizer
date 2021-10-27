import { highlightBarsInit, highlightBars } from "./highlightBars";
import { buildBars } from "../grid/grid-logic";

let isInitialized: boolean = false;
let cycleBars: number;
let outerLoop: any;
let currentInnerLoop: any;
let innerLoopMax: any;
let finished: any;

export const bubbleSortInit = (bars: number[]) => {
  let currentInnerLoop: number = 0;
  let outerLoop: number = 0;
  let innerLoopMax: number = bars.length;
  let finished: boolean = false;

  return { currentInnerLoop, outerLoop, innerLoopMax, finished };
};

export const bubbleSort = (grid: number[][], heights: number[]) => {
  if (isInitialized === false) {
    isInitialized = true;
    cycleBars = highlightBarsInit();
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
    cycleBars++;
    if (cycleBars < heights.length) {
      return highlightBars(cycleBars, grid, heights);
    } else {
      console.log("trapped af");
      //return false;
      buildBars(grid, heights, [0, 0]);
    }
  }

  console.log("never returns");
  buildBars(grid, heights, [0, 0]);
};
