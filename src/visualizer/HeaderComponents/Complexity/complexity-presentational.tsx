import { ComplexityContainer } from "./complexity-styles";
import { useSelector } from "react-redux";

export const Complexity = () => {
  const globalState = useSelector((state: GlobalState) => state);
  return (
    <ComplexityContainer id="complexity" data-test="algorithm-complexity">
      <span data-test="algorithm-time-complexity">
        Time Complexity: {globalState.algorithm.timeComplexity}
      </span>
      <span data-test="algorithm-space-complexity">
        Space Complexity: {globalState.algorithm.spaceComplexity}
      </span>
    </ComplexityContainer>
  );
};
