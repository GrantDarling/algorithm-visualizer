import * as actionTypes from "./actionTypes";
import { initialState } from "./initialState";

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
        start: false,
        gridSize: action.global.gridSize,
      };
    case actionTypes.CHANGE_ALGORITHM:
      return {
        ...state,
        start: action.global.start,
        algorithm: {
          type: action.global.algorithm.type,
          timeComplexity: action.global.algorithm.timeComplexity,
          spaceComplexity: action.global.algorithm.spaceComplexity,
        },
      };
    case actionTypes.CHANGE_THEME:
      return {
        ...state,
        theme: action.global.theme,
      };
    default:
      return state;
  }
};

export default reducer;
