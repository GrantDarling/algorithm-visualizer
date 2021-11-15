import { buildBars } from "../grid-components/grid-sorting/grid-sorting-business";
import { victoryLap } from "./algorithm-helpers";

let isInitialized: boolean = false;
let counter: number;
let arrays: number[][];
let highlights: number[][];

const selectionSortInit = (bars: number[]) => {
  let counter: number = 0;
  let selectionSortInit: number[][][] = selectionSort(bars);
  let arrays: number[][] = selectionSortInit[0];
  let highlights: number[][] = selectionSortInit[1];

  return { counter, arrays, highlights };
};

function initialize(barHeights: any) {
  isInitialized = true;
  ({ counter, arrays, highlights } = selectionSortInit(barHeights));
}

function selectionSort(array: number[]) {
  const arrays: number[][] = [];
  const highlights: number[][] = [];

  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
      arrays.push([...array]);
      highlights.push([j, min]);
    }
    if (min !== i) {
      let tmp = array[i];
      array[i] = array[min];
      array[min] = tmp;

      arrays.push([...array]);
      highlights.push([i, min]);
    }
  }
  return [arrays, highlights];
}

export const selectionSortAnimation = (
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
