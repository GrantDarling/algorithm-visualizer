import { Row } from "./row";
import { Column, Button } from "../../styles/styles";
import { useEffect, useState } from "react";
import { buildBars, selectionSort } from "./grid-logic";
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
      ...state,
      start: state.start,
    };
  });

  useEffect(() => {
    setBars(buildBars(grid, heights, [0, 0]));
  }, []);

  useEffect(() => {
    setAnimate(global.start);
  }, [global.start]);

  useEffect(() => {
    let animateID: any;
    if (animate) {
      const animate = () => {
        let algorithm: any = selectionSort(grid, heights);
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
