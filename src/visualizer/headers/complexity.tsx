import { ComplexityContainer } from "../../styles/styles";
import { useSelector } from "react-redux";

export const Complexity = () => {
  const global: IGlobal = useSelector((state: GlobalState) => {
    return {
      ...state,
      gridSize: state.gridSize,
    };
  });

  return (
    <ComplexityContainer>
      <span>Time Complexity: {global.algorithm.timeComplexity}</span>
      <span>Space Complexity: {global.algorithm.spaceComplexity}</span>
    </ComplexityContainer>
  );
};
