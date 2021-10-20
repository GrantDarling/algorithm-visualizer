import { Bar } from "./bar";
import { assignBarHeights } from "../logic/grid";

type SortingGridProps = {
  grid: number[][];
};

export const SortingGrid = ({ grid }: SortingGridProps) => {
  const heights: number[] = assignBarHeights(grid);
  return (
    <div id="grid-container">
      <Bar grid={grid} height={0} heights={heights} />
    </div>
  );
};
