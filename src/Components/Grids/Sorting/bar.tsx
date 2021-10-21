import { useEffect, useState } from "react";
import { Row } from "../../Map/row";
import { SortingColumnStyled } from "../../Map/styles";
import { buildBars } from "../logic/grid";

type BarProps = {
  grid: number[][];
  height: number;
  heights: number[];
  // active: boolean;
};

export const Bar = ({ grid, heights }: BarProps) => {
  interface Bar {
    height: number;
    location: number[];
  }

  let [myInterval, setMyInterval] = useState<boolean>(false);
  let [bars, setBars] = useState<Bar[]>([]);

  useEffect(() => {
    setBars(buildBars(grid, heights));
  }, [grid, heights]);

  function reBuildBars() {
    setBars([{ height: 2, location: [0, 1, 2] }]);
  }

  let render: number = 0;

  // 1. create tests so that bubble sort always works
  // 2. make rows so that it is always lowest to highest(no doubles looks better)
  function bubbleSort() {
    render++;

    if (render < heights.length) {
      for (let i = 0; i <= render; i++) {
        for (let j = 0; j <= heights.length - 1; j++) {
          if (heights[j] > heights[j + 1]) {
            [heights[j], heights[j + 1]] = [heights[j + 1], heights[j]];
            setBars(buildBars(grid, heights));
          }
        }
      }
    } else {
      setMyInterval(true);
    }

    return heights;
  }
  useEffect(() => {}, []);

  useEffect(() => {
    let timerId: any;
    if (myInterval === false) {
      timerId = setInterval(() => {
        console.log("Interval triggered");
        bubbleSort();
      }, 600);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [myInterval]);

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
