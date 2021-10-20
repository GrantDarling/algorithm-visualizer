import { Row } from "../row";
import { SortingColumnStyled } from "../styles";
import { getRandomInteger } from "../../Helpers/helpers";

type ColumnProps = {
  grid: number[][];
  length: number;
};

export const SortingColumn = ({ grid }: ColumnProps) => {
  const columnMaxHeight = grid[0].length;

  return (
    <>
      {grid.map((row, idx) => {
        const length = getRandomInteger(columnMaxHeight);
        return (
          <SortingColumnStyled
            key={idx}
            className="column"
            length={length}
            data-length={length}
          >
            <Row row={row} />
          </SortingColumnStyled>
        );
      })}
    </>
  );
};
