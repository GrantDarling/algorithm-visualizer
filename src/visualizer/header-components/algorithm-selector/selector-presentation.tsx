import { AlgorithmSelectorContainer } from "./selector-styles";
import useSelectorImplementation from "./selector-implementation";
import { algorithms } from "./selector-business";

export const AlgorithmSelector = () => {
  const { algorithm, handleSelectChange } = useSelectorImplementation();

  return (
    <AlgorithmSelectorContainer id="selector" data-test="algorithm-selector">
      <label htmlFor="algorithm" data-test="algorithm-label">
        Algorithms
      </label>
      <select
        name="algorithm"
        id="algorithm-selector"
        value={algorithm.type}
        data-timecomplexity={algorithm.timeComplexity}
        data-spacecomplexity={algorithm.spaceComplexity}
        onChange={handleSelectChange}
      >
        {algorithms.map((option) => {
          return (
            <option
              key={option.id}
              value={option.value}
              data-test="algorithm-option"
              data-testid={option.id}
              data-timecomplexity={option.complexity.time}
              data-spacecomplexity={option.complexity.space}
            >
              {option.algorithm}
            </option>
          );
        })}
      </select>
    </AlgorithmSelectorContainer>
  );
};
