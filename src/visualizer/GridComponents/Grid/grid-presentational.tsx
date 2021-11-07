import { SortingGrid } from "../GridSorting/grid-sorting-presentation";
import { useGrid } from "./grid-implementation";

export const Grid = () => {
  const { grid } = useGrid();
  return <SortingGrid grid={grid} />;
};
