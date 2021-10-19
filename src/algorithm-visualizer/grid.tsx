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
    // create column component and a row component within it
    <div id="grid-container">
      {grid.map((row, idx) => {
        return (
          <div key={idx} className="column">
            {row.map((node, idx) => {
              return (
                <div key={idx} className="node">
                  {node}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

// {
//   grid.map((row, idx) => {
//     return (
//       <div key={idx} className="node" data-row={row}>
//         {row}
//       </div>
//     );
//   });
// }
