import { useEffect, useState } from "react";
import { buildBars } from "../logic/grid";
import * as sortAlgo from "../../Algorithmns/algorithms-sorting";

interface BarState {
  height: number;
  location: number[];
  active: boolean;
}

export const useBubbleSort = (grid: number[][], heights: number[]) => {
  let [myInterval, setMyInterval] = useState<boolean>(false);
  let [bars, setBars] = useState<BarState[]>([]);

  useEffect(() => {
    setBars(buildBars(grid, heights, [1, 1]));
  }, [grid, heights]);

  const highlightBars = (nextBar: number) => {
    let thisBar: number = nextBar - 1;
    if (nextBar < heights.length) {
      setBars(buildBars(grid, heights, [thisBar, nextBar]));
    }
  };

  useEffect(() => {
    let { outerLoop, innerLoopCurrent, innerLoopMax, finished } =
      sortAlgo.bubbleSortInit(heights);
    let nextBar: number = sortAlgo.highlightBarsInit();

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
          highlightBars(nextBar);
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
  }, [myInterval]);

  return bars;
};
