import { buildBars } from "../grid/grid-logic";

let isInitialized: boolean = false;
let outerLoop: number;
let activeBar: number;
let currentMinBar: number;
let advanceInnerLoop: number = 0;

const selectionSortInit = (bars: number[]) => {
  let activeBar: number = 0;
  let outerLoop: number = 0;
  let currentMinBar: number = bars[0];

  return {
    activeBar,
    outerLoop,
    currentMinBar,
  };
};

function initialize(barHeights: any) {
  isInitialized = true;
  ({ outerLoop, activeBar, currentMinBar } = selectionSortInit(barHeights));
}

function resetInnerLoop(barHeights: any) {
  advanceInnerLoop++;
  activeBar = advanceInnerLoop;
  currentMinBar = barHeights[activeBar];
  if (outerLoop === barHeights.length) activeBar = 0; // victory loop
}

function swap(barHeights: any) {
  let currentMinBarHeight: number =
    barHeights[barHeights.indexOf(currentMinBar)];
  barHeights[barHeights.indexOf(currentMinBar)] = barHeights[outerLoop];
  barHeights[outerLoop] = currentMinBarHeight;
}

export const selectionSort = (grid: number[][], barHeights: number[]) => {
  if (!isInitialized) initialize(barHeights);

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
  }
};
