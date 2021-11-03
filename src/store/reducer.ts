import * as actionTypes from "./actionTypes";

const initialState: GlobalState = {
  start: false,
  gridSize: 10,
  algorithm: {
    type: "bubbleSort",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
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
        start: action.global.start,
        algorithm: {
          ...state.algorithm,
          type: action.global.algorithm.type,
          timeComplexity: action.global.algorithm.timeComplexity,
          spaceComplexity: action.global.algorithm.spaceComplexity,
        },
      };
  }
  return state;
};

export default reducer;
