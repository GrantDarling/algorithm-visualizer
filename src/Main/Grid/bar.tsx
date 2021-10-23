import { Row } from "./row";
import { Column } from "../../Styles/styles";
import { useEffect, useState } from "react";
import { useBubbleSort } from "../Algorithms/Sorting/BubbleSort/useBubbleSort";
import { buildBars } from "./grid-logic";

type BarProps = {
  grid: number[][];
  heights: number[];
};

export interface BarState {
  height: number;
  location: number[];
  active: boolean;
}

export const Bar = ({ grid, heights }: BarProps) => {
  let [bars, setBars] = useState<BarState[]>([]);

  useEffect(() => {
    setBars(buildBars(grid, heights, [1, 1]));
  }, [grid, heights]);

  bars = useBubbleSort(grid, heights);
  return (
    <>
      {bars.map((props, idx) => {
        return (
          <Column
            key={idx}
            className={props.active ? "active column" : "column"}
            height={props.height}
          >
            <Row row={props.location} />
          </Column>
        );
      })}
    </>
  );
};
