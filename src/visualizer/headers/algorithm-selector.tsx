import { AlgorithmSelectorContainer } from "../../styles/styles";

export const AlgorithmSelector = () => {
  return (
    <AlgorithmSelectorContainer data-test="algorithm-selector">
      <label htmlFor="algorithm" data-test="algorithm-label">
        Algorithm
      </label>
      <select name="algorithm" id="algorithm-selector">
        <option value="bubble-sort" data-test="algorithm-option">
          Bubble Sort
        </option>
        <option value="selection-sort" data-test="algorithm-option">
          Selection Sort
        </option>
        <option value="merge-sort" data-test="algorithm-option">
          Merge Sort
        </option>
      </select>
    </AlgorithmSelectorContainer>
  );
};
