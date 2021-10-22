import { useEffect, useState } from "react";
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
    active: boolean;
  }

  let [myInterval, setMyInterval] = useState<boolean>(false);
  let [bars, setBars] = useState<Bar[]>([]);

  useEffect(() => {
    setBars(buildBars(grid, heights, [0, 1]));
  }, [grid, heights]);

  function reBuildBars() {
    setBars([{ height: 2, location: [0, 1, 2], active: true }]);
  }

  let render: number = 0;
  let outerLoop: number = 0;
  let endOfSort: number = heights.length;
  let nextRender: number = 0;

  function x(renderingNum: number) {
    console.log("mynum", renderingNum);
    console.log("myheight", heights.length);

    if (renderingNum < heights.length) {
      for (let i = renderingNum - 1; i <= renderingNum; i++) {
        setBars(buildBars(grid, heights, [i, i - 1]));
      }
    }
  }

  // 1. create tests so that bubble sort always works
  // 2. make rows so that it is always lowest to highest(no doubles looks better)

  // useEffect(() => {
  //   let timerId: any;
  //   if (myInterval === false) {
  //     timerId = setInterval(() => {
  //       bubbleSort();
  //     }, 50);
  //   }

  //   return () => {
  //     console.log("complete");
  //     clearInterval(timerId);
  //   };
  // }, [myInterval]);

  useEffect(() => {
    function bubbleSort() {
      render++;

      if (render >= endOfSort) {
        outerLoop++;
        endOfSort--;
        render = 1;
      }

      if (outerLoop < heights.length) {
        for (let i = render - 1; i <= render; i++) {
          // let k: number = i + 1;

          setBars(buildBars(grid, heights, [i, i - 1]));

          if (heights[i] > heights[i + 1]) {
            [heights[i], heights[i + 1]] = [heights[i + 1], heights[i]];
          }
        }
      } else if (outerLoop >= heights.length) {
        nextRender++;
        if (nextRender < heights.length) {
          x(nextRender);
        } else {
          setBars(buildBars(grid, heights, [-1, 0]));
          setMyInterval(true);
        }
      }

      return heights;
    }

    let timerId: any;

    if (myInterval === false) {
      const f = () => {
        bubbleSort();
        timerId = requestAnimationFrame(f);
      };

      timerId = requestAnimationFrame(f);
    }

    return () => {
      cancelAnimationFrame(timerId);
      console.log("canceled!");
    };
  }, [myInterval]);
  return (
    <>
      {bars.map((props: Bar, idx) => {
        return (
          <SortingColumnStyled
            key={idx}
            className={props.active ? "active column" : "column"}
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
