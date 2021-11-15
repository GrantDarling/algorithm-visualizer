import { Dispatch } from "redux";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGridSize } from "../../../store/actionCreators";

const useCreateGridImplementation = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const globalState = useSelector((state: GlobalState) => state);
  const [global] = useState(globalState);
  const [grid, setGrid] = useState(global.gridSize);
  const [limit] = useState(35);

  useEffect(() => {
    dispatch(setGridSize(global, grid));
  }, [dispatch, global, grid]);

  const handleInputChange: any | number = (
    e: HTMLElementEvent<HTMLInputElement>,
    limit: number
  ) => {
    return Number(e.target.value) > limit
      ? setGrid(limit)
      : setGrid(Number(e.target.value));
  };

  return { handleInputChange, grid, limit };
};

export default useCreateGridImplementation;
