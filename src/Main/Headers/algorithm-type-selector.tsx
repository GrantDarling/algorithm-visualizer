import { AlgorithmTypeSelectorContainer } from "../../styles/styles";

export const AlgorithmTypeSelector = () => {
  return (
    <AlgorithmTypeSelectorContainer>
      <label htmlFor="grid-size">Algorithm Type</label>
      <select name="cars" id="cars">
        <option value="volvo">Sort</option>
        <option value="saab">Search</option>
        <option value="mercedes">Graph</option>
      </select>
    </AlgorithmTypeSelectorContainer>
  );
};
