import { buildBars } from "../grid-components/grid-sorting/grid-sorting-business";

let counter: number = 0;
export function victoryLap(
  arraySize: number,
  grid: number[][],
  array: number[]
) {
  if (counter > arraySize) counter = 0;
  let result =
    counter < arraySize
      ? buildBars(grid, array, [counter, counter - 1])
      : undefined;
  counter++;
  return result;
}
