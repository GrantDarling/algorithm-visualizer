import { buildBars } from "../grid/grid-logic";

let isInitialized: boolean = false;
let outerLoop: number;
let activeBar: number;
let victoryLap: number;
let currentMinBar: number;
let advanceInnerLoop: number;

const selectionSortInit = (bars: number[]) => {
  let activeBar: number = 0;
  let outerLoop: number = 0;
  let currentMinBar: number = bars[0];
  let victoryLap: number = 0;
  let advanceInnerLoop: number = 0;

  return {
    activeBar,
    outerLoop,
    victoryLap,
    currentMinBar,
    advanceInnerLoop,
  };
};

function initialize(barHeights: any) {
  isInitialized = true;
  ({ outerLoop, activeBar, currentMinBar, victoryLap, advanceInnerLoop } =
    selectionSortInit(barHeights));
}

function resetInnerLoop(barHeights: any) {
  advanceInnerLoop++;
  activeBar = advanceInnerLoop;
  currentMinBar = barHeights[activeBar];
}

function swap(barHeights: any) {
  let currentMinBarHeight: number =
    barHeights[barHeights.indexOf(currentMinBar)];
  barHeights[barHeights.indexOf(currentMinBar)] = barHeights[outerLoop];
  barHeights[outerLoop] = currentMinBarHeight;
}

export const selectionSort = (
  grid: number[][],
  barHeights: number[],
  restart: boolean
) => {
  if (!isInitialized || restart) initialize(barHeights);

  activeBar++;

  // 1. loop through bars
  if (activeBar < barHeights.length) {
    let minItemIndex: number = barHeights.indexOf(currentMinBar);

    if (barHeights[activeBar] < currentMinBar) {
      currentMinBar = barHeights[activeBar];
    }

    return buildBars(grid, barHeights, [minItemIndex, activeBar]);
    // 2. swap heights, advance outerloop & restart
  } else if (outerLoop < barHeights.length) {
    swap(barHeights);
    outerLoop++;
    resetInnerLoop(barHeights);

    return buildBars(grid, barHeights, [activeBar, activeBar]);
    // 3. final loop
  } else if (victoryLap < barHeights.length) {
    victoryLap++;
    return buildBars(grid, barHeights, [victoryLap, victoryLap - 1]);
  }

  return undefined;
};
