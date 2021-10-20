import { Column } from "../../Map/column";
// import { GridProps } from "../../Map/grid";

// type SortingGridProps = GridProps &
type SortingGridProps = {
  height: number;
  heights: number[];
  grid: number[][];
};

export const SortingGrid = ({ grid, height, heights }: SortingGridProps) => {
  return (
    <div id="grid-container">
      <Column grid={grid} height={0} heights={heights} />
    </div>
  );
};
