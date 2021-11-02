import * as actionTypes from "./actionTypes";

const initialState: GlobalState = {
  start: false,
  gridSize: 10,
  algorithm: {
    type: "bubbleSort",
    timeComplexity: "sample",
    spaceComplexity: "other sample",
  },
};

const reducer = (
  state: GlobalState = initialState,
  action: GlobalAction
): GlobalState => {
  switch (action.type) {
    case actionTypes.TOGGLE_START:
      return {
        ...state,
        start: !state.start,
      };
    case actionTypes.GRID_SIZE:
      return {
        ...state,
        gridSize: action.global.gridSize,
      };
    case actionTypes.CHANGE_ALGORITHM:
      return {
        ...state,
        algorithm: {
          ...state.algorithm,
          type: action.global.algorithm.type,
        },
      };
  }
  return state;
};

export default reducer;
