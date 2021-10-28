import { highlightBarsInit, highlightBars } from "./highlightBars";
import { buildBars } from "../grid/grid-logic";

/* Selection Sort */

let isInitialized: boolean = false;
let cycleBars: number;
let outerLoop: any;
let currentInnerLoop: any;
let currentMin: any;
let currentItem: any;
let advanceInnerLoop: number = 0;

const selectionSortInit = (bars: number[]) => {
  let currentInnerLoop: number = 0;
  let outerLoop: number = 0;
  let currentMin: number = bars[0];

  return {
    currentInnerLoop,
    outerLoop,
    currentMin,
    currentItem,
  };
};

export const selectionSort = (grid: number[][], heights: number[]) => {
  function initialize() {
    isInitialized = true;

    ({ outerLoop, currentInnerLoop, currentMin, currentItem } =
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
