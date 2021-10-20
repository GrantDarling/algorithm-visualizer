import { SortingGrid } from "../Algorithmns/Sorting/grid";
import { createGrid } from "./logic/grid";
import { useEffect, useState } from "react";

export type GridProps = {
  rows: number;
  columns: number;
};

export const Grid = ({ columns, rows }: GridProps) => {
  //let [grid, setGrid] = useState<number[][]>([]);
  let grid: number[][] = createGrid(columns, rows);

  // useEffect(() => {
  //   setGrid(createGrid(columns, rows));
  // }, [columns, rows]);

  return <SortingGrid grid={grid} />;
};
