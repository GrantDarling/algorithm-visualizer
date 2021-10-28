import { useState, useEffect } from "react";
import { CreateGridContainer } from "../../styles/styles";

// redux
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { setGridSize } from "../../store/actionCreators";

export const CreateGrid = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const globalState = useSelector((state: GlobalState) => state);
  const [grid, setGrid] = useState(globalState.gridSize);

  useEffect(() => {
    dispatch(setGridSize(globalState, grid));
  }, [dispatch, globalState, grid]);

  return (
    <CreateGridContainer>
      <label htmlFor="grid-size">Array_Size</label>
      <input
        type="text"
        name="grid-size"
        placeholder="Max: 100"
        value={Number(grid)}
        onChange={(e) => setGrid(Number(e.target.value))}
      />
    </CreateGridContainer>
  );
};
