import { buildBars } from "../grid-components/grid-sorting/grid-sorting-business";
import { victoryLap } from "./algorithm-helpers";

let isInitialized = false;
let counter: number;
let arrays: number[][];
let highlights: number[][];

const heapSortInit = (array: number[]) => {
  let counter: number = 0;
  let heapSortInit: number[][][] = heapSort(array);
  let arrays: number[][] = heapSortInit[0];
  let highlights: number[][] = heapSortInit[1];

  return {
    counter,
    arrays,
    highlights,
  };
};

function initialize(array: number[]) {
  isInitialized = true;
  ({ counter, arrays, highlights } = heapSortInit(array));
}

const heapSort = (array: number[]) => {
  let arrays: number[][] = [];
  let highlights: number[][] = [];

  const a: number[] = [...array];
  let l: number = a.length;

  const heapify = (a: number[], i: number) => {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let max = i;
    if (left < l && a[left] > a[max]) max = left;
    if (right < l && a[right] > a[max]) max = right;
    if (max !== i) {
      [a[max], a[i]] = [a[i], a[max]];
      heapify(a, max);
    }
    arrays.push([...a]);
    highlights.push([i, max, l]);
  };

  for (let i = Math.floor(l / 2); i >= 0; i -= 1) heapify(a, i);
  for (let i = a.length - 1; i > 0; i--) {
    [a[0], a[i]] = [a[i], a[0]];
    l--;
    heapify(a, 0);
  }
  return [arrays, highlights];
};

export function heapSortAnimation(
  grid: number[][],
  array: number[],
  restart: boolean
) {
  if (!isInitialized || restart) initialize(array);

  if (counter < arrays.length) {
    const animate = buildBars(grid, arrays[counter], highlights[counter]);
    counter++;
    return animate;
  }
  return victoryLap(array.length, grid, arrays[arrays.length - 1]);
}
