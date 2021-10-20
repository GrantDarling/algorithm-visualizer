import { useEffect, useState, useCallback } from "react";
import { Row } from "../row";
import { SortingColumnStyled } from "../styles";

type ColumnProps = {
  grid: number[][];
  height: number;
  randomizer: number[];
};

export const SortingColumn = ({ grid, randomizer }: ColumnProps) => {
  // console.log(heights);
  const [clicks, setClicks] = useState(0);

  interface Column {
    height: number;
    location: number[];
  }

  const [column, setColumn] = useState<Column>({ height: 0, location: [0, 0] });
  let [columnsx, setColumnsx] = useState<Column[]>([]);

  let columns: Column[] = [];

  function shuffle(array: Column[]) {
    let currentIndex = array.length,
      randomIndex;

    //console.log("counter");

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  let y: number = -1;

  const fetchBusinesses = useCallback(() => {
    let z: Column[] = [];

    grid.map((col) => {
      y++;
      let temp_column: Column = {
        height: randomizer[y],
        location: col,
      };

      return z.push(temp_column);
    });

    return z;
  }, [grid, randomizer, y]);

  useEffect(() => {
    let x: Column[] = fetchBusinesses();
    setColumnsx(x);
    console.log(x);
  }, [fetchBusinesses]);

  function funcx() {
    setColumnsx([
      { height: 2, location: [0, 1, 2] },
      { height: 2, location: [0, 1, 2] },
      { height: 2, location: [0, 1, 2] },
    ]);
  }

  return (
    <>
      {columnsx.map((props: Column, idx) => {
        return (
          <SortingColumnStyled
            key={idx}
            className="column"
            height={props.height}
            data-height={props.height}
            data-x={clicks}
          >
            <button onClick={() => funcx()}></button>
            <Row row={props.location} />
          </SortingColumnStyled>
        );
      })}
    </>
  );
};
