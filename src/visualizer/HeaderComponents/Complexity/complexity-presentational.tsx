import { ComplexityContainer } from "./complexity-styles";
import { useSelector } from "react-redux";

export const Complexity = () => {
  const globalState = useSelector((state: GlobalState) => state);
  return (
    <ComplexityContainer id="complexity" data-test="algorithm-complexity">
      <span>Complexities</span>
      <span data-test="algorithm-time-complexity">
        Time: <b>{globalState.algorithm.timeComplexity}</b>
      </span>
      <span data-test="algorithm-space-complexity">
        Space: <b>{globalState.algorithm.spaceComplexity}</b>
      </span>
    </ComplexityContainer>
  );
};
