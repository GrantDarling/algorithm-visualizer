import { AlgorithmTypeSelectorContainer } from "../../styles/styles";

export const AlgorithmTypeSelector = () => {
  return (
    <AlgorithmTypeSelectorContainer>
      <label htmlFor="algorithm-type">Algorithm Type</label>
      <select name="algorithm-type" id="algorithm-type">
        <option value="sort">Sort</option>
        <option value="search">Search</option>
        <option value="graph">Graph</option>
      </select>
    </AlgorithmTypeSelectorContainer>
  );
};
