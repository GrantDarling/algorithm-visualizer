type GridProps = {
  rows: number;
  columns: number;
};

export const Grid = ({ rows, columns }: GridProps) => {
  const grid: number[][] = [];

  for (let column: number = 0; column < columns; column++) {
    let column_arr = [];
    for (let row: number = 0; row < rows; row++) {
      column_arr.push(row);
    }
    grid.push(column_arr);
  }

  return (
    <div id="grid-container">
      {grid.map((row) => {
        return (
          <div className="column">
            {row.map((node) => {
              return <div className="node">{node}</div>;
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
