import { Row } from "./row";
import { Column, Button } from "../../styles/styles";
import { useEffect, useState } from "react";
import { buildBars, bubbleSort, selectionSort } from "./grid-logic";
import { useSelector } from "react-redux";

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

  const global: IGlobal = useSelector((state: GlobalState) => {
    return {
      start: state.start,
    };
  });

  useEffect(() => {
    console.log("x");
    setAnimate(global.start);
  }, [global.start]);

  useEffect(() => {
    console.log("y");
    setBars(buildBars(grid, heights, [0, 0]));
  }, [grid, heights]);

  useEffect(() => {
    let animateID: any;
    console.log("z");
    if (animate) {
      const animate = () => {
        // setBars(bubbleSort(grid, heights));
        setBars(selectionSort(grid, heights));
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
            <Button />
            <Row row={props.location} />
          </Column>
        );
      })}
    </>
  );
};
