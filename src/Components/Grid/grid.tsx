import { Column } from "./column";

type GridProps = {
  rows: number;
  columns: number;
};

export const Grid = ({ rows, columns }: GridProps) => {
  const grid: number[][] = [];

  for (let column: number = 0; column < columns; column++) {
    let temp_column = [];
    for (let row: number = 0; row < rows; row++) {
      temp_column.push(row);
    }
    grid.push(temp_column);
  }

  return (
    <div id="grid-container">
      <Column grid={grid} length={5} />
    </div>
  );
};
