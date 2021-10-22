import { Row } from "../../Map/row";
import { SortingColumnStyled } from "../../Map/styles";
import { useBubbleSort } from "./useBubbleSort";

type BarProps = {
  grid: number[][];
  heights: number[];
};

export const Bar = ({ grid, heights }: BarProps) => {
  const bars = useBubbleSort(grid, heights);
  return (
    <>
      {bars.map((props, idx) => {
        return (
          <SortingColumnStyled
            key={idx}
            className={props.active ? "active column" : "column"}
            height={props.height}
            data-height={props.height}
          >
            <Row row={props.location} />
          </SortingColumnStyled>
        );
      })}
    </>
  );
};
