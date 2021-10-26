import { SortingGrid } from "./grid-sorting";
import { createGrid } from "./grid-logic";

// redux
import { useSelector } from "react-redux";

export const Grid = () => {
  const global: IGlobal = useSelector((state: GlobalState) => {
    return {
      ...state,
      gridSize: state.gridSize,
    };
  });

  let grid: number[][] = createGrid(global.gridSize, global.gridSize);
  return <SortingGrid grid={grid} />;
};
