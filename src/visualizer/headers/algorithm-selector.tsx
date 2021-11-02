import { AlgorithmSelectorContainer } from "../../styles/styles";
import { useState, useEffect } from "react";
import { changeAlgorithm } from "../../store/actionCreators";

import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";

export const AlgorithmSelector = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const globalState = useSelector((state: GlobalState) => state);

  const [global] = useState(globalState);
  const [selected, setSelected] = useState("bubbleSort");

  function handleSelectChange(e: any) {
    console.log(e.target.value);
    setSelected(e.target.value);
  }

  useEffect(() => {
    dispatch(
      changeAlgorithm({
        ...global,
        algorithm: {
          ...global.algorithm,
          type: selected,
        },
      })
    );
  }, [dispatch, selected, global]);

  return (
    <AlgorithmSelectorContainer data-test="algorithm-selector">
      <label htmlFor="algorithm" data-test="algorithm-label">
        Algorithms
      </label>
      <select
        name="algorithm"
        id="algorithm-selector"
        value={selected}
        onChange={handleSelectChange}
      >
        <option
          value="bubbleSort"
          data-test="algorithm-option"
          data-testid="bubble-sort"
          onClick={() => setSelected("bubbleSort")}
        >
          Bubble Sort
        </option>
        <option
          value="selectionSort"
          data-test="algorithm-option"
          data-testid="selection-sort"
        >
          Selection Sort
        </option>
        <option
          value="mergeSort"
          data-test="algorithm-option"
          data-testid="merge-sort"
        >
          Merge Sort
        </option>
      </select>
    </AlgorithmSelectorContainer>
  );
};
