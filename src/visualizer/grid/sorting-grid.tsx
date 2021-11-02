import { useEffect, useState } from "react";
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

  const initalize = (grid: number[][]) => {
    setHeights(initiateBarHeights(grid));
    setBars(buildBars(grid, [], [-1, -1]));
  };

  useEffect(() => initalize(grid), [grid]);
  useEffect(() => setAnimate(global.start), [global.start]);

  useEffect(() => {
    let animateID: number;

    if (animate) {
      const animate = () => {
        const algorithm: BarState[] | undefined = algorithmSelector(
          global.algorithm.type,
          grid,
          heights
        );
        if (algorithm !== undefined) {
          setBars(algorithm);
          animateID = requestAnimationFrame(animate);
        }
      };
      animateID = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(animateID);
  }, [animate, grid, heights, global.algorithm.type]);

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
