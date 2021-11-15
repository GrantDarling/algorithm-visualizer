import { buildBars } from "../grid-components/grid-sorting/grid-sorting-business";
import { victoryLap } from "./algorithm-helpers";

let isInitialized: boolean = false;
let counter: number;
let arrays: number[][];
let highlights: number[][];

export const bubbleSortInit = (bars: number[]) => {
  let counter: number = 0;
  let bubbleSortInit: number[][][] = bubbleSort(bars);
  let arrays: number[][] = bubbleSortInit[0];
  let highlights: number[][] = bubbleSortInit[1];
  let arraySize = bars.length;

  return { counter, arrays, highlights, arraySize };
};

function initialize(barHeights: any) {
  isInitialized = true;
  ({ counter, arrays, highlights } = bubbleSortInit(barHeights));
}

const bubbleSort = (array: number[]) => {
  const arrays: number[][] = [];
  const highlights: number[][] = [];

  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        var tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
      arrays.push([...array]);
      highlights.push([j, j + 1]);
    }
  }
  return [arrays, highlights];
};

export const bubbleSortAnimation = (
  grid: number[][],
  array: number[],
  restart: boolean
) => {
  if (!isInitialized || restart) initialize(array);

  if (counter < arrays.length) {
    const animate = buildBars(grid, arrays[counter], highlights[counter]);
    counter++;
    return animate;
  }
  return victoryLap(array.length, grid, array);
};
