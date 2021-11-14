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
      timeComplexity: selectedOption.getAttribute("data-timecomplexity"),
      spaceComplexity: selectedOption.getAttribute("data-spacecomplexity"),
    });
  }

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

  return { algorithm, handleSelectChange };
};

export default useSelectorImplementation;
