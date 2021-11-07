import { buildBars } from "../GridComponents/GridSorting/grid-sorting-business";

let isInitialized = false;
let arrayLength: number;
let i: number;
let j: number;
let victoryLap: number;

const heapSortInit = (array: number[]) => {
  arrayLength = array.length;
  victoryLap = 0;
  i = Math.floor(arrayLength / 2);
  j = array.length - 1;

  return { arrayLength, victoryLap, i, j };
};

function initialize(array: any) {
  isInitialized = true;
  return heapSortInit(array);
}

function heapify(input: number[], i: number) {
  var left = 2 * i + 1;
  var right = 2 * i + 2;
  var max = i;

  if (left < arrayLength && input[left] > input[max]) {
    max = left;
  }

  if (right < arrayLength && input[right] > input[max]) {
    max = right;
  }

  if (max !== i) {
    let c = swap(input, i, max);
    heapify(input, max);
    return [max, c[0], c[1], c[3]];
  }
  return [max, -1, -1, -1];
}

function swap(array: number[], index_A: number, index_B: number) {
  var temp = array[index_A];

  array[index_A] = array[index_B];
  array[index_B] = temp;

  return [array[index_A], array[index_B], temp];
}

export function heapSort(grid: number[][], array: number[], restart: boolean) {
  if (!isInitialized || restart) initialize(array);

  if (i >= 0) {
    i -= 1;
    let e = heapify(array, i);

    return buildBars(grid, array, [i, e[0], e[1], e[2], e[3]]);
  }

  if (j > 0) {
    let a = swap(array, 0, j);
    arrayLength--;
    let b = heapify(array, 0);
    j = arrayLength - 1;
    return buildBars(grid, array, [0, a[0], j, b[0], b[1], b[2], b[3]]);
  }
  // victory lap
  else if (victoryLap < array.length) {
    victoryLap++;
    return buildBars(grid, array, [victoryLap, victoryLap - 1]);
  }

  return undefined;
}
