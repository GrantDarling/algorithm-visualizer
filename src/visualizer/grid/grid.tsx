import { SortingGrid } from "./sorting-grid";
import { createGrid } from "./grid-logic";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const Grid = () => {
  const global: IGlobal = useSelector((state: GlobalState) => state);
  const [grid, setGrid] = useState<number[][]>([]);

  useEffect(
    () => setGrid(createGrid(global.gridSize, global.gridSize)),
    [global.gridSize]
  );

  return <SortingGrid grid={grid} />;
};
