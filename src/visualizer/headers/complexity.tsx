import { ComplexityContainer } from "../../styles/styles";
import { useSelector } from "react-redux";

export const Complexity = () => {
  const globalState = useSelector((state: GlobalState) => state);

  return (
    <ComplexityContainer>
      <span>Time Complexity: {globalState.algorithm.timeComplexity}</span>
      <span>Space Complexity: {globalState.algorithm.spaceComplexity}</span>
    </ComplexityContainer>
  );
};
