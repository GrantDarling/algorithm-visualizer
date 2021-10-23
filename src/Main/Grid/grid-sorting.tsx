import { Bar } from "./bar";
import { assignBarHeights } from "./grid-logic";

type SortingGridProps = {
  grid: number[][];
};

export const SortingGrid = ({ grid }: SortingGridProps) => {
  const heights: number[] = assignBarHeights(grid);
  return (
    <div id="grid-container">
      <Bar grid={grid} heights={heights} />
    </div>
  );
};
