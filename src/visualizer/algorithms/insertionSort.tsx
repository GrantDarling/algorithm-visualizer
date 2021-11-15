import { buildBars } from "../grid-components/grid-sorting/grid-sorting-business";
import { victoryLap } from "./algorithm-helpers";

let isInitialized: boolean = false;
let counter: number;
let arrays: number[][];
let highlights: number[][];

export const insertionSortInit = (bars: number[]) => {
  let counter: number = 0;
  let insertionSortInit: number[][][] = insertionSort(bars);
  let arrays: number[][] = insertionSortInit[0];
  let highlights: number[][] = insertionSortInit[1];

  return {
    counter,
    arrays,
    highlights,
  };
};

function initialize(barHeights: any) {
  isInitialized = true;
  ({ counter, arrays, highlights } = insertionSortInit(barHeights));
}

const insertionSort = (array: number[]) => {
  let arrays: number[][] = [];
  let highlights: number[][] = [];

  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;

    while (j > -1 && current < array[j]) {
      array[j + 1] = array[j];
      j--;

      arrays.push([...array]);
      highlights.push([i, j + 1]);
    }

    array[j + 1] = current;
    arrays.push([...array]);
    highlights.push([i, j + 1]);
  }
  return [arrays, highlights];
};

export const insertionSortAnimation = (
  grid: number[][],
  array: number[],
  restart: boolean
): any => {
  if (!isInitialized || restart) initialize(array);
  if (counter < arrays.length) {
    let animate = buildBars(grid, arrays[counter], highlights[counter]);
    counter++;
    return animate;
  }
  return victoryLap(array.length, grid, array);
};
