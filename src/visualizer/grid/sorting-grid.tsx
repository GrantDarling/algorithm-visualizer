import { useEffect, useState } from "react";
import { Column, Button } from "../../styles/styles";
import { buildBars, initiateBarHeights } from "./grid-logic";

import { useSelector } from "react-redux";
import { bubbleSort } from "../algorithms/bubbleSort";

interface BarState {
  height: number;
  location: number[];
  color: string;
  active: boolean;
}

type SortingGridProps = {
  grid: number[][];
};

export const SortingGrid = ({ grid }: SortingGridProps) => {
  const [heights, setHeights] = useState<number[]>([]);
  let [bars, setBars] = useState<BarState[]>([]);
  let [animate, setAnimate] = useState<boolean>(false);

  const global: IGlobal = useSelector((state: GlobalState) => {
    return {
      ...state,
      start: state.start,
    };
  });

  useEffect(() => {
    setHeights(initiateBarHeights(grid));
    setBars(buildBars(grid, [], [-1, -1]));
  }, [grid]);

  useEffect(() => {
    setAnimate(global.start);
  }, [global.start]);

  useEffect(() => {
    let animateID: any;
    if (animate) {
      const animate = () => {
        let algorithm: any = bubbleSort(grid, heights);
        if (algorithm !== undefined) {
          setBars(algorithm);
          animateID = requestAnimationFrame(animate);
        }
      };
      animateID = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(animateID);
  }, [animate, grid, heights]);

  return (
    <div id="grid-container">
      {bars.map((props, idx) => {
        return (
          <Column
            key={idx}
            className={props.active ? "active column" : "column"}
            height={props.height}
            color={props.color}
          >
            <Button />
            {props.location.map((_, idx) => (
              <div key={idx} className="node"></div>
            ))}
          </Column>
        );
      })}
    </div>
  );
};
