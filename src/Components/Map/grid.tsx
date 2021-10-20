import { getRandomInteger } from "../Helpers/helpers";
import { SortingGrid } from "../Algorithmns/Sorting/grid";

export type GridProps = {
  rows: number;
  columns: number;
  heights?: number[];
};

export const Grid = ({ columns, rows }: GridProps) => {
  const grid: number[][] = [];

  for (let column: number = 0; column < columns; column++) {
    let temp_column = [];
    for (let row: number = 0; row < rows; row++) {
      temp_column.push(row);
    }
    grid.push(temp_column);
  }

  const columnMaxHeight = grid[0].length;
  let heights: number[] = [];

  function randomHeights() {
    heights = [];
    for (let random: number = 0; random < grid.length; random++) {
      const height: number = getRandomInteger(columnMaxHeight);
      heights.push(height);
    }
    return heights;
  }

  randomHeights();

  return <SortingGrid grid={grid} height={0} heights={heights} />;
};
