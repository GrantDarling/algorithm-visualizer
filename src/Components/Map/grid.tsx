import { SortingGrid } from "../Algorithmns/Sorting/grid";
import { createGrid } from "./logic/grid";

export type GridProps = {
  rows: number;
  columns: number;
};

export const Grid = ({ columns, rows }: GridProps) => {
  let grid: number[][] = createGrid(columns, rows);
  return <SortingGrid grid={grid} />;
};
