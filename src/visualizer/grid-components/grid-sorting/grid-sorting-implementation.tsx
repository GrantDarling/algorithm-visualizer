import { useEffect, useState, useRef } from "react";
import { browserName, isBrowser } from "react-device-detect";

import {
  buildBars,
  initiateBarHeights,
  algorithmSelector,
} from "./grid-sorting-business";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { toggleStart } from "../../../store/actionCreators";

interface BarState {
  height: number;
  location: number[];
  color: string;
  active: boolean;
}

type SortingGridProps = {
  grid: number[][];
};

export const useSortingGrid = ({ grid }: SortingGridProps) => {
  const dispatch: Dispatch<any> = useDispatch();
  const global: IGlobal = useSelector((state: GlobalState) => state);
  const [heights, setHeights] = useState<number[]>([]);
  const [bars, setBars] = useState<BarState[]>([]);
  const [animate, setAnimate] = useState<boolean>(false);
  const [restart, setRestart] = useState<boolean>(false);
  const animateID = useRef<any>(0);

  const initalize = (grid: number[][]) => {
    setHeights(initiateBarHeights(grid));
    setBars(buildBars(grid, [], [-1, -1]));
  };

  useEffect(() => initalize(grid), [grid]);

  useEffect(() => {
    setAnimate(global.start);
    setHeights(initiateBarHeights(grid));
  }, [global.start, grid]);

  useEffect(() => {
    console.log(`${browserName} ${isBrowser},`);
  }, []);

  useEffect(() => {
    if (browserName === "Safari" && isBrowser) {
      alert(
        "Sorry, the visualizer currently does not work on the Safari browser and I haven't found the time to fix this. Try it out on chrome, firefox or mobile!"
      );
      return;
    }

    if (animate) {
      const animate = () => {
        const algorithm: BarState[] | undefined = algorithmSelector(
          global.algorithm.type,
          grid,
          heights,
          restart
        );
        if (algorithm !== undefined) {
          setBars(algorithm);
          setRestart(false);
          animateID.current = window.requestAnimationFrame(animate);
        } else if (global.start) {
          dispatch(toggleStart(global));
        }
      };
      animateID.current = window.requestAnimationFrame(animate);
    } else {
      setRestart(true);
    }

    return () => {
      window.cancelAnimationFrame(animateID.current);
    };
  }, [animate, grid, heights, restart, global, dispatch]);

  return { bars, grid };
};
