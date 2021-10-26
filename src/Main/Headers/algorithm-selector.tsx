import { AlgorithmSelectorContainer } from "../../styles/styles";

export const AlgorithmSelector = () => {
  return (
    <AlgorithmSelectorContainer>
      <label htmlFor="grid-size">Algorithm Type</label>
      <select name="algorithm" id="cars">
        <option value="bubble-sort">Bubble Sort</option>
        <option value="selection-sort">Selection Sort</option>
        <option value="merge-sort">Merge Sort</option>
      </select>
    </AlgorithmSelectorContainer>
  );
};
