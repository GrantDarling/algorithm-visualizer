import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { toggleStart } from "../../../store/actionCreators";
import { useEffect, useState } from "react";

const useHeaderImplementation = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const start = useSelector((state: GlobalState) => state.start);
  const setStart = (start: any) => dispatch(toggleStart(start));
  const [visualizerText, setVisualizerText] = useState("visualize");

  useEffect(
    () => setVisualizerText(start === false ? "visualize" : "stop"),
    [start]
  );
  return { visualizerText, setStart, start };
};

export default useHeaderImplementation;
