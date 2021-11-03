import { useEffect, useState, useRef } from "react";
import { Column, Button } from "../../styles/styles";
import { buildBars, initiateBarHeights, algorithmSelector } from "./grid-logic";
import { useSelector } from "react-redux";

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
    console.log(animate);
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
          animateID.current = requestAnimationFrame(animate);
        }
      };
      animateID.current = requestAnimationFrame(animate);
    } else {
      setRestart(true);
    }

    return () => {
      console.log("cance;");
      cancelAnimationFrame(animateID.current);
    };
  }, [animate, grid, heights, global.algorithm.type, global.start, restart]);

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
