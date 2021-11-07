import * as actionTypes from "./actionTypes";
import { main } from "../styles/styles-themes";

const initialState: GlobalState = {
  start: false,
  gridSize: 20,
  algorithm: {
    type: "bubbleSort",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
  },
  theme: main,
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
