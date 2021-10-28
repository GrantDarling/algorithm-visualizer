import { useEffect, useState } from "react";
import { Column, Button } from "../../styles/styles";
import { buildBars, initiateBarHeights, selectionSort } from "./grid-logic";

import { useSelector } from "react-redux";
// import { bubbleSort } from "../algorithms/bubbleSort";

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
  const start: boolean = useSelector((state: GlobalState) => state.start);
  const [heights, setHeights] = useState<number[]>([]);
  const [bars, setBars] = useState<BarState[]>([]);
  const [animate, setAnimate] = useState<boolean>(false);

  const initalize = (grid: number[][]) => {
    setHeights(initiateBarHeights(grid));
    setBars(buildBars(grid, [], [-1, -1]));
  };

  useEffect(() => initalize(grid), [grid]);
  useEffect(() => setAnimate(start), [start]);

  useEffect(() => {
    let animateID: number;

    if (animate) {
      const animate = () => {
        let algorithm: BarState[] | undefined = selectionSort(grid, heights);

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
