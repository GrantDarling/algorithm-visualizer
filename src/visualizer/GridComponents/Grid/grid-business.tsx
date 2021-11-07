export function createGrid(columns: number, rows: number): number[][] {
  let grid: number[][] = [];

  if (rows <= 0) rows = 0;
  if (columns <= 0) columns = 0;

  for (let column: number = 0; column < columns; column++) {
    let temp_column = [];
    for (let row: number = 0; row < rows; row++) {
      temp_column.push(row);
    }
    grid.push(temp_column);
  }

  return grid;
}
