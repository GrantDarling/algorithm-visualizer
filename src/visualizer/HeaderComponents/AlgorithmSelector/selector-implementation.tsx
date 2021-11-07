import { Dispatch } from "redux";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeAlgorithm } from "../../../store/actionCreators";

const useSelectorImplementation = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const globalState = useSelector((state: GlobalState) => state);

  const [global] = useState(globalState);
  const [algorithm, setAlgorithm] = useState({
    type: global.algorithm.type,
    timeComplexity: global.algorithm.timeComplexity,
    spaceComplexity: global.algorithm.spaceComplexity,
  });

  function handleSelectChange(e: any) {
    const selectedOption = e.target.querySelector(
      `option[value="${e.target.value}"]`
    );

    setAlgorithm({
      type: e.target.value,
      spaceComplexity: selectedOption.getAttribute("data-timecomplexity"),
      timeComplexity: selectedOption.getAttribute("data-spacecomplexity"),
    });
  }

  const options = [
    {
      id: "bubble-sort",
      algorithm: "Bubble Sort",
      value: "bubbleSort",
      test: "algorithm-option",
      complexity: {
        time: "O(n²)",
        space: "O(1)",
      },
    },
    {
      id: "selection-sort",
      algorithm: "Selection Sort",
      value: "selectionSort",
      test: "algorithm-option",
      complexity: {
        time: "O(n²)",
        space: "O(1)",
      },
    },
    {
      id: "heap-sort",
      algorithm: "Heap Sort",
      value: "heapSort",
      test: "algorithm-option",
      complexity: {
        time: "O(nlogn)",
        space: "O(1)",
      },
    },
  ];

  useEffect(() => {
    dispatch(
      changeAlgorithm({
        ...global,
        algorithm: {
          type: algorithm.type,
          timeComplexity: algorithm.timeComplexity,
          spaceComplexity: algorithm.spaceComplexity,
        },
      })
    );
  }, [dispatch, algorithm, global]);

  return { algorithm, handleSelectChange, options };
};

export default useSelectorImplementation;
