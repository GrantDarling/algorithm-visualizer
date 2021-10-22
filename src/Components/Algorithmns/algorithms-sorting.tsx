/* Bubble Sort */

export const bubbleSortInit = (bars: number[]) => {
  let innerLoopCurrent: number = 0;
  let outerLoop: number = 0;
  let innerLoopMax: number = bars.length;
  let finished: boolean = false;

  return { innerLoopCurrent, outerLoop, innerLoopMax, finished };
};

export const highlightBarsInit = () => {
  let nextBar: number = 0;
  return nextBar;
};

// export const highlightBars = (nextBar: number) => {
//   let thisBar: number = nextBar - 1;
//   if (nextBar < heights.length) {
//     setBars(buildBars(grid, heights, [thisBar, nextBar]));
//   }
// };
