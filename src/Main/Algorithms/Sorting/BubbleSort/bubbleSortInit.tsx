/* Bubble Sort */

export const bubbleSortInit = (bars: number[]) => {
  let innerLoopCurrent: number = 0;
  let outerLoop: number = 0;
  let innerLoopMax: number = bars.length;
  let finished: boolean = false;

  return { innerLoopCurrent, outerLoop, innerLoopMax, finished };
};
