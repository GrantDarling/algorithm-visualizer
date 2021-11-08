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
    let d: any = heapify(input, max);
    return [
      max,
      left,
      right,
      i,
      input[left],
      input[right],
      input[max],
      c[0],
      c[1],
      c[3],
      d[0],
      d[1],
      d[2],
      d[3],
      d[4],
    ];
  }
  return [
    max,
    left,
    right,
    i,
    input[left],
    input[right],
    input[max],
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
  ];
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

    return buildBars(grid, array, [
      i,
      i + 1,
      j,
      e[0],
      e[1],
      e[2],
      e[3],
      e[4],
      e[5],
      e[6],
      e[7],
      e[8],
      e[9],
      e[10],
      e[11],
      e[12],
      e[13],
      e[14],
    ]);
  }

  if (j > 0) {
    let a = swap(array, 0, j);
    arrayLength--;
    let b = heapify(array, 0);
    j = arrayLength - 1;
    return buildBars(grid, array, [
      0,
      a[0],
      a[1],
      a[2],
      b[0],
      b[1],
      b[2],
      b[3],
      b[4],
      b[5],
      b[6],
      b[7],
      b[8],
      b[9],
      b[10],
      b[11],
      b[12],
      b[13],
      b[14],
      i,
      j,
      j + 1,
      arrayLength + 1,
    ]);
  }
  // victory lap
  else if (victoryLap < array.length) {
    victoryLap++;
    return buildBars(grid, array, [victoryLap, victoryLap - 1]);
  }

  return undefined;
}
