import { useEffect, useState, useCallback } from "react";
import { Row } from "../../Map/row";
import { SortingColumnStyled } from "../../Map/styles";
import { buildBars } from "../logic/grid";

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

  useEffect(() => {
    setBars(buildBars(grid, heights));
  }, []);

  function reBuildBars() {
    setBars([{ height: 2, location: [0, 1, 2] }]);
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
            <button onClick={() => reBuildBars()}></button>
            <Row row={props.location} />
          </SortingColumnStyled>
        );
      })}
    </>
  );
};
