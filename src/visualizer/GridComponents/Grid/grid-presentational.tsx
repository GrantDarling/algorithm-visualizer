import { SortingGrid } from "../sorting-grid";
import { useGrid } from "./grid-implementation";

export const Grid = () => {
  const { grid } = useGrid();
  return <SortingGrid grid={grid} />;
};
