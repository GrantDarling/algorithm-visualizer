import { useEffect, useState } from "react";
import { buildBars } from "../../../Grid/grid-logic";
import { bubbleSortInit } from "./bubbleSortInit";
import { highlightBarsInit, highlightBars } from "../../General/inits";
import { BarState } from "../../../Grid/bar";

export const useBubbleSort = (grid: number[][], heights: number[]) => {
  let [myInterval, setMyInterval] = useState<boolean>(false);
  let [bars, setBars] = useState<BarState[]>([]);

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
          setMyInterval(true);
        }
      }

      return heights;
    };

    let animateID: any;

    if (myInterval === false) {
      const animate = () => {
        bubbleSort();
        animateID = requestAnimationFrame(animate);
      };

      animateID = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(animateID);
  }, [myInterval, grid, heights]);

  return bars;
};
