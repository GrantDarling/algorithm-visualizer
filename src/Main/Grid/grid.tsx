import { SortingGrid } from "./grid-sorting";
import { createGrid } from "./grid-logic";

export type GridProps = {
  rows: number;
  columns: number;
};

export const Grid = ({ columns, rows }: GridProps) => {
  let grid: number[][] = createGrid(columns, rows);
  return <SortingGrid grid={grid} />;
};
