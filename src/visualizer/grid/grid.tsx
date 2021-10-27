import { SortingGrid } from "./sorting-grid";
import { createGrid } from "./grid-logic";

// redux
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const Grid = () => {
  const [grid, setGrid] = useState<number[][]>([]);
  const global: IGlobal = useSelector((state: GlobalState) => {
    return {
      ...state,
      gridSize: state.gridSize,
    };
  });

  useEffect(() => {
    setGrid(createGrid(global.gridSize, global.gridSize));
  }, [global.gridSize]);

  return <SortingGrid grid={grid} />;
};
