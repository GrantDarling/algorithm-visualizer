import { Column } from "../../Map/column";
import { getRandomInteger } from "../../Helpers/helpers";
import { useEffect } from "react";
// import { GridProps } from "../../Map/grid";

// type SortingGridProps = GridProps &
type SortingGridProps = {
  grid: number[][];
};

export const SortingGrid = ({ grid }: SortingGridProps) => {
  //useEffect(() => {
  //console.log("grid2", grid);
  let heights: number[] = [];

  // useEffect(() => {
  function randomHeights() {
    heights = [];
    const columnMaxHeight = grid[0].length;
    for (let random: number = 0; random < grid.length; random++) {
      const height: number = getRandomInteger(columnMaxHeight);
      heights.push(height);
    }
    return heights;
  }
  randomHeights();
  // }, []);
  //}, []);

  return (
    <div id="grid-container">
      <Column grid={grid} height={0} heights={heights} />
    </div>
  );
};
