import { useEffect, useState } from "react";
import { Row } from "./row";
import { Column, Button } from "../../styles/styles";
import { assignBarHeights } from "./grid-logic";

import { useSelector } from "react-redux";
import { bubbleSort } from "../algorithms/Sorting/bubbleSort";

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

  useEffect(() => {
    setHeights(assignBarHeights(grid));
  }, [grid]);

  let [bars, setBars] = useState<BarState[]>([]);
  let [animate, setAnimate] = useState<boolean>(false);

  const global: IGlobal = useSelector((state: GlobalState) => {
    return {
      ...state,
      start: state.start,
    };
  });

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
            <Row row={props.location} />
          </Column>
        );
      })}
    </div>
  );
};
