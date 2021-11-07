import { AlgorithmTypeSelectorContainer } from "./type-selector-styles";

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
      </select>
    </AlgorithmTypeSelectorContainer>
  );
};
