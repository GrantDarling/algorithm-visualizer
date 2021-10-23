import { Row } from "./row";
import { Column } from "../../Styles/styles";
import { useEffect, useState } from "react";
import { buildBars } from "./grid-logic";
import { bubbleSortInit } from "../Algorithms/Sorting/BubbleSort/bubbleSortInit";
import { highlightBarsInit, highlightBars } from "../Algorithms/General/inits";

type BarProps = {
  grid: number[][];
  heights: number[];
};

interface BarState {
  height: number;
  location: number[];
  color: string;
  active: boolean;
}

export const Bar = ({ grid, heights }: BarProps) => {
  let [bars, setBars] = useState<BarState[]>([]);
  let [animate, setAnimate] = useState<boolean>(false);

  const restart = () => {
    setAnimate(!animate);
  };

  useEffect(() => {
    setBars(buildBars(grid, heights, [0, 0]));
  }, [grid, heights]);

  useEffect(() => {
    let nextBar: number = highlightBarsInit();
    let { outerLoop, innerLoopCurrent, innerLoopMax, finished } =
      bubbleSortInit(heights);

    const bubbleSort = () => {
      innerLoopCurrent++;

      if (innerLoopCurrent >= innerLoopMax) {
        innerLoopCurrent = 1;
        outerLoop++;
        innerLoopMax--;
      }

      if (outerLoop < heights.length) {
        let i: number = innerLoopCurrent - 1;

        setBars(buildBars(grid, heights, [i, i - 1]));

        if (heights[i] > heights[i + 1]) {
          [heights[i], heights[i + 1]] = [heights[i + 1], heights[i]];
        }
      } else {
        finished = true;
      }

      if (finished) {
        nextBar++;
        if (nextBar < heights.length) {
          setBars(highlightBars(nextBar, grid, heights));
        } else {
          setBars(buildBars(grid, heights, [0, 0]));
          setAnimate(true);
        }
      }

      return heights;
    };

    let animateID: any;

    if (animate) {
      const animate = () => {
        bubbleSort();
        animateID = requestAnimationFrame(animate);
      };

      animateID = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(animateID);
  }, [animate, grid, heights]);

  return (
    <>
      {bars.map((props, idx) => {
        return (
          <Column
            key={idx}
            className={props.active ? "active column" : "column"}
            height={props.height}
            color={props.color}
          >
            <button
              onClick={() => {
                restart();
              }}
            />
            <Row row={props.location} />
          </Column>
        );
      })}
    </>
  );
};
