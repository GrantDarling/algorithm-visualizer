import { AlgorithmSelectorContainer } from "../../styles/styles";

export const AlgorithmSelector = () => {
  return (
    <AlgorithmSelectorContainer>
      <label htmlFor="grid-size">Algorithm Type</label>
      <select name="cars" id="cars">
        <option value="volvo">Bubble Sort</option>
        <option value="saab">Selection Sort</option>
        <option value="mercedes">Merge Sort</option>
      </select>
    </AlgorithmSelectorContainer>
  );
};
