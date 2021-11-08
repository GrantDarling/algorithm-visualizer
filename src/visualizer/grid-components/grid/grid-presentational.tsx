import { SortingGrid } from "../grid-sorting/grid-sorting-presentation";
import { useGrid } from "./grid-implementation";

export const Grid = () => {
  const { grid } = useGrid();
  return <SortingGrid grid={grid} />;
};
