import { SortingColumn } from "./sorting/sorting-column";
import { getRandomInteger } from "../Helpers/helpers";

type GridProps = {
  rows: number;
  columns: number;
  randomizer: number[];
};

export const Grid = ({ columns, rows, randomizer }: GridProps) => {
  const grid: number[][] = [];

  for (let column: number = 0; column < columns; column++) {
    let temp_column = [];
    for (let row: number = 0; row < rows; row++) {
      temp_column.push(row);
    }
    grid.push(temp_column);
  }

  const columnMaxHeight = grid[0].length;
  let randomizerx: number[] = [];

  function rand() {
    randomizerx = [];
    for (let random: number = 0; random < grid.length; random++) {
      const x: number = getRandomInteger(columnMaxHeight);
      randomizerx.push(x);
    }
    console.log(randomizerx);
    return randomizerx;
  }

  rand();

  return (
    <div id="grid-container">
      <SortingColumn grid={grid} height={0} randomizer={randomizerx} />
    </div>
  );
};
