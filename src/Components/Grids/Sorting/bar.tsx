import { useEffect, useState, useCallback } from "react";
import { Row } from "../../Map/row";
import { SortingColumnStyled } from "../../Map/styles";

type BarProps = {
  grid: number[][];
  height: number;
  heights: number[];
};

export const Bar = ({ grid, heights }: BarProps) => {
  interface Bar {
    height: number;
    location: number[];
  }

  let [bars, setBars] = useState<Bar[]>([]);

  const buildBars = useCallback(() => {
    let bars: Bar[] = [];

    grid.map((col, idx) => {
      let temp_bar: Bar = {
        height: heights[idx],
        location: col,
      };

      return bars.push(temp_bar);
    });

    return bars;
  }, [grid, heights]);

  useEffect(() => {
    setBars(buildBars());
  }, [buildBars]);

  function funcx() {
    setBars([
      { height: 2, location: [0, 1, 2] },
      { height: 2, location: [0, 1, 2] },

      { height: 2, location: [0, 1, 2] },
    ]);
  }

  return (
    <>
      {bars.map((props: Bar, idx) => {
        return (
          <SortingColumnStyled
            key={idx}
            className="column"
            height={props.height}
            data-height={props.height}
          >
            <button onClick={() => funcx()}></button>
            <Row row={props.location} />
          </SortingColumnStyled>
        );
      })}
    </>
  );
};
