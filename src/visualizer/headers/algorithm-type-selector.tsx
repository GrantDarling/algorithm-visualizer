import { AlgorithmTypeSelectorContainer } from "../../styles/styles";

export const AlgorithmTypeSelector = () => {
  return (
    <AlgorithmTypeSelectorContainer data-test="algorithm-type-selector">
      <label htmlFor="algorithm-type" data-test="algorithm-label">
        Algorithm Type
      </label>
      <select name="algorithm-type" id="algorithm-type">
        <option value="sort" data-test="algorithm-option">
          Sort
        </option>
        <option value="search" data-test="algorithm-option">
          Search
        </option>
        <option value="graph" data-test="algorithm-option">
          Graph
        </option>
      </select>
    </AlgorithmTypeSelectorContainer>
  );
};
