import { Row } from "./row";

type ColumnProps = {
  grid: number[][];
};

export const Column = ({ grid }: ColumnProps) => {
  return (
    <>
      {grid.map((row, idx) => {
        return (
          <div key={idx} className="column">
            <Row row={row} />
          </div>
        );
      })}
    </>
  );
};
