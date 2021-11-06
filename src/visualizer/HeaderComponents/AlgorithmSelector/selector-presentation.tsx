import { AlgorithmSelectorContainer } from "../../../styles/styles";
import useSelectorImplementation from "./selector-implementation";

export const AlgorithmSelector = () => {
  const { algorithm, handleSelectChange } = useSelectorImplementation();
  return (
    <AlgorithmSelectorContainer data-test="algorithm-selector">
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
        <option
          value="bubbleSort"
          data-test="algorithm-option"
          data-testid="bubble-sort"
          data-timecomplexity="O(n²)"
          data-spacecomplexity="O(1)"
        >
          Bubble Sort
        </option>
        <option
          value="selectionSort"
          data-test="algorithm-option"
          data-testid="selection-sort"
          data-timecomplexity="O(n&sup2;)"
          data-spacecomplexity="O(1)"
        >
          Selection Sort
        </option>
        <option
          value="heapSort"
          data-test="algorithm-option"
          data-testid="heap-sort"
          data-timecomplexity="O(nlogn)"
          data-spacecomplexity="O(1)"
        >
          Heap Sort
        </option>
      </select>
    </AlgorithmSelectorContainer>
  );
};
