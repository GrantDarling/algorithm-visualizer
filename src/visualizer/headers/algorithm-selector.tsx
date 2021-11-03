import { AlgorithmSelectorContainer } from "../../styles/styles";
import { useState, useEffect } from "react";
import { changeAlgorithm } from "../../store/actionCreators";

import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";

export const AlgorithmSelector = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const globalState = useSelector((state: GlobalState) => state);

  const [global] = useState(globalState);
  const [algorithm, setAlgorithm] = useState(global.algorithm.type);
  const [timeComplexity, setTimeComplexity] = useState(
    global.algorithm.timeComplexity
  );
  const [spaceComplexity, setSpaceComplexity] = useState(
    global.algorithm.spaceComplexity
  );

  function handleSelectChange(e: any) {
    const selectedOption = e.target.querySelector(
      `option[value="${e.target.value}"]`
    );
    setAlgorithm(e.target.value);
    setTimeComplexity(selectedOption.getAttribute("data-timecomplexity"));
    setSpaceComplexity(selectedOption.getAttribute("data-spacecomplexity"));
  }

  useEffect(() => {
    dispatch(
      changeAlgorithm({
        ...global,
        algorithm: {
          ...global.algorithm,
          type: algorithm,
          timeComplexity: timeComplexity,
          spaceComplexity: spaceComplexity,
        },
      })
    );
  }, [dispatch, algorithm, global, spaceComplexity, timeComplexity]);

  return (
    <AlgorithmSelectorContainer data-test="algorithm-selector">
      <label htmlFor="algorithm" data-test="algorithm-label">
        Algorithms
      </label>
      <select
        name="algorithm"
        id="algorithm-selector"
        value={algorithm}
        data-timecomplexity={timeComplexity}
        data-spacecomplexity={spaceComplexity}
        onChange={handleSelectChange}
      >
        <option
          value="bubbleSort"
          data-test="algorithm-option"
          data-testid="bubble-sort"
          data-timecomplexity="O(n&sup2;)"
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
          value="mergeSort"
          data-test="algorithm-option"
          data-testid="merge-sort"
          data-timecomplexity="O(nlogn)"
          data-spacecomplexity="O(n)"
        >
          Merge Sort
        </option>
      </select>
    </AlgorithmSelectorContainer>
  );
};
