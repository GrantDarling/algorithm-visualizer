import { buildBars } from "../GridComponents/GridSorting/grid-sorting-business";

let isInitialized: boolean = false;
let victoryLap: number;
let outerLoop: number;
let activeBar: number;
let innerLoopMax: number;

export const bubbleSortInit = (bars: number[]) => {
  let activeBar: number = 0;
  let outerLoop: number = 0;
  let innerLoopMax: number = bars.length;
  let victoryLap: number = 0;

  return { activeBar, outerLoop, innerLoopMax, victoryLap };
};

function initialize(barHeights: any) {
  isInitialized = true;
  ({ outerLoop, activeBar, innerLoopMax, victoryLap } =
    bubbleSortInit(barHeights));
}

export const bubbleSort = (
  grid: number[][],
  barHeights: number[],
  restart: boolean
) => {
  if (!isInitialized || restart) initialize(barHeights);

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
  } else if (victoryLap < barHeights.length) {
    victoryLap++;
    return buildBars(grid, barHeights, [victoryLap, victoryLap - 1]);
  }

  return undefined;
};
