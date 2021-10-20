import { Row } from "./row";
import styled from "styled-components";

interface x {
  length: number;
  color: string;
}

const StyledColumn = styled.div<x>`
  .node:nth-last-child(-n + ${(props) => props.length}) {
    background: ${(props) => props.color};
  }
`;

type ColumnProps = {
  grid: number[][];
  length: number;
};

export const Column = ({ grid }: ColumnProps) => {
  const columnHeight = grid[0].length;

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  return (
    <>
      {grid.map((row, idx) => {
        const length = getRandomInt(columnHeight);
        return (
          <StyledColumn
            key={idx}
            className="column"
            length={length}
            data-length={length}
            color={"#F7B2C6"}
          >
            <Row row={row} />
          </StyledColumn>
        );
      })}
    </>
  );
};
