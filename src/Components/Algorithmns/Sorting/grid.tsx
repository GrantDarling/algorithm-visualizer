import { Column } from "../../Map/column";
import { getRandomInteger } from "../../Helpers/helpers";
// import { GridProps } from "../../Map/grid";

// type SortingGridProps = GridProps &
type SortingGridProps = {
  height: number;
  heights: number[];
  grid: number[][];
};

export const SortingGrid = ({ grid, height }: SortingGridProps) => {
  const columnMaxHeight = grid[0].length;
  let heights: number[] = [];

  function randomHeights() {
    heights = [];
    for (let random: number = 0; random < grid.length; random++) {
      const height: number = getRandomInteger(columnMaxHeight);
      heights.push(height);
    }
    return heights;
  }

  randomHeights();
  return (
    <div id="grid-container">
      <Column grid={grid} height={0} heights={heights} />
    </div>
  );
};
