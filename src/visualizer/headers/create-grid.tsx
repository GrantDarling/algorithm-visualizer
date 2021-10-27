import { CreateGridContainer } from "../../styles/styles";
import { useState, useEffect } from "react";
import { setGridSize } from "../../store/actionCreators";

import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";

export const CreateGrid = () => {
  const [value, setValue] = useState(10);

  const gridSize: IGlobal = useSelector((state: GlobalState) => {
    return {
      ...state,
      gridSize: value,
    };
  });

  useEffect(() => {
    console.log("value");
    dispatch(setGridSize(gridSize));
  }, [value]);

  const dispatch: Dispatch<any> = useDispatch();

  return (
    <CreateGridContainer>
      <label htmlFor="grid-size">Array_Size</label>
      <input
        type="text"
        name="grid-size"
        placeholder="Max: 100"
        value={Number(value)}
        onChange={(e) => setValue(Number(e.target.value))}
      />
    </CreateGridContainer>
  );
};
