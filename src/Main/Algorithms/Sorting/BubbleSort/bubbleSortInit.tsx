/* Bubble Sort */

export const bubbleSortInit = (bars: number[]) => {
  let currentInnerLoop: number = 0;
  let outerLoop: number = 0;
  let innerLoopMax: number = bars.length;
  let finished: boolean = false;

  return { currentInnerLoop, outerLoop, innerLoopMax, finished };
};
