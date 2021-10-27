import * as actionTypes from "./actionTypes";

/* Global State */
export function toggleStart(global: IGlobal) {
  const action: GlobalAction = {
    type: actionTypes.TOGGLE_START,
    global,
  };
  return dispatchGlobal(action);
}

export function setGridSize(global: IGlobal) {
  const action: GlobalAction = {
    type: actionTypes.GRID_SIZE,
    global,
  };
  return dispatchGlobal(action);
}

export function setAlgorithm(global: IGlobal) {
  const action: GlobalAction = {
    type: actionTypes.CHANGE_ALGORITHM,
    global,
  };
  return dispatchGlobal(action);
}

export function dispatchGlobal(action: GlobalAction) {
  return (dispatch: DispatchGlobalType) => {
    dispatch(action);
  };
}
