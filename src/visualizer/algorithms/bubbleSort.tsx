import { buildBars } from "../grid/grid-logic";

let isInitialized: boolean = false;
let cycleBars: number;
let outerLoop: any;
let activeBar: any;
let innerLoopMax: any;

export const bubbleSortInit = (bars: number[]) => {
  let activeBar: number = 0;
  let outerLoop: number = 0;
  let innerLoopMax: number = bars.length;
  let cycleBars: number = 0;

  return { activeBar, outerLoop, innerLoopMax, cycleBars };
};

function initialize(barHeights: any) {
  isInitialized = true;
  ({ outerLoop, activeBar, innerLoopMax, cycleBars } =
    bubbleSortInit(barHeights));
}

export const bubbleSort = (grid: number[][], barHeights: number[]) => {
  if (!isInitialized) initialize(barHeights);

  activeBar++;

  if (activeBar >= innerLoopMax) {
    activeBar = 1;
    innerLoopMax--;
    outerLoop++;
  }

  if (outerLoop < barHeights.length) {
    let i: number = activeBar - 1;

    if (barHeights[i] > barHeights[i + 1]) {
      let bars: any = buildBars(grid, barHeights, [i, i - 1]);
      [barHeights[i], barHeights[i + 1]] = [barHeights[i + 1], barHeights[i]];
      return bars;
    }

    return buildBars(grid, barHeights, [i, i - 1]);
  }

  // victory loop
  else if (cycleBars < barHeights.length) {
    cycleBars++;
    return buildBars(grid, barHeights, [cycleBars, cycleBars - 1]);
  }

  return undefined;
};
