import { SortingGrid } from "../Algorithmns/Sorting/grid";

export type GridProps = {
  rows: number;
  columns: number;
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

  return <SortingGrid grid={grid} height={0} heights={[]} />;
};
