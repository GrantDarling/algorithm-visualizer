import { Column } from "../../../style/styles-global";
import { useSortingGrid } from "./grid-sorting-implementation";

type SortingGridProps = {
  grid: number[][];
};

export const SortingGrid = ({ grid }: SortingGridProps) => {
  const { bars } = useSortingGrid({ grid });
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
            {props.location.map((_, idx) => (
              <div key={idx} className="node"></div>
            ))}
          </Column>
        );
      })}
    </div>
  );
};
