import { buildBars } from "../../Grid/grid-logic";

export const highlightBarsInit = () => {
  let nextBar: number = 0;
  return nextBar;
};

export const highlightBars: any = (
  nextBar: number,
  grid: number[][],
  heights: number[]
) => {
  let thisBar: number = nextBar - 1;
  if (nextBar < heights.length) {
    return buildBars(grid, heights, [thisBar, nextBar]);
  }
};
