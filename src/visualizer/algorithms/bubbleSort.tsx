import { buildBars } from "../grid-components/grid-sorting/grid-sorting-business";

let isInitialized: boolean = false;
let victoryLap: number;
let outerLoop: number;
let activeBar: number;
let innerLoopMax: number;
let i: number;
let j: number;
let y: number;
let arrays: number[][];
let highlights: number[][];

export const bubbleSortInit = (bars: number[]) => {
  let activeBar: number = 0;
  let outerLoop: number = 0;
  let innerLoopMax: number = bars.length;
  let victoryLap: number = 0;
  let i: number = 1;
  let j: number = 0;
  let y: number = 0;
  let x: number[][][] = insertionSort(bars);
  let arrays: number[][] = x[0];
  let highlights: number[][] = x[1];

  return {
    activeBar,
    outerLoop,
    innerLoopMax,
    victoryLap,
    i,
    j,
    y,
    arrays,
    highlights,
  };
};

function insertionSort(array: number[]) {
  let arraysx: number[][] = [];
  let highlights: number[][] = [];
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;
    while (j > -1 && current < array[j]) {
      array[j + 1] = array[j];
      j--;
      const clone1 = [...array];
      arraysx.push(clone1);
      highlights.push([i, j]);
    }
    array[j + 1] = current;
    const clone = [...array];
    arraysx.push(clone);
    highlights.push([i, j]);
  }
  return [arraysx, highlights];
}

function initialize(barHeights: any) {
  isInitialized = true;
  ({
    outerLoop,
    activeBar,
    innerLoopMax,
    victoryLap,
    i,
    j,
    y,
    arrays,
    highlights,
  } = bubbleSortInit(barHeights));
}

export const bubbleSort = (
  grid: number[][],
  array: number[],
  restart: boolean
): any => {
  if (!isInitialized || restart) initialize(array);
  if (y < arrays.length) {
    let animate = buildBars(grid, arrays[y], highlights[y]);
    y++;
    return animate;
  }
  return undefined;
};
