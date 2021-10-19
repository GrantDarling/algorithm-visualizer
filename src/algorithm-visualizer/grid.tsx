import React from "react"; // we need this to make JSX compile

type GridProps = {
  rows: number;
  columns: number;
};

export const Grid = ({ rows, columns }: GridProps) => {
  const grid: number[][] = [];

  for (let row: number = 0; row < rows; row++) {
    for (let column: number = 0; column < columns; column++) {
      grid.push([row, column]);
    }
  }

  console.log(grid);
  return (
    <div id="grid-container">
      {grid.map((node, idx) => {
        return (
          <div key={idx} className="node">
            {node}
          </div>
        );
      })}
    </div>
  );
};
