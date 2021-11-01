import { AlgorithmSelectorContainer } from "../../styles/styles";

export const AlgorithmSelector = () => {
  return (
    <AlgorithmSelectorContainer>
      <label htmlFor="algorithm">Algorithm</label>
      <select name="algorithm" id="algorithm-selector">
        <option value="bubble-sort">Bubble Sort</option>
        <option value="selection-sort">Selection Sort</option>
        <option value="merge-sort">Merge Sort</option>
      </select>
    </AlgorithmSelectorContainer>
  );
};
