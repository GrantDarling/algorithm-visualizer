import * as actionTypes from "./actionTypes";

export function toggleStart(global: IGlobal) {
  const action: GlobalAction = {
    type: actionTypes.TOGGLE_START,
    global,
  };
  return dispatchGlobal(action);
}

export function setGridSize(global: IGlobal, gridSize: number) {
  const action: GlobalAction = {
    type: actionTypes.GRID_SIZE,
    global: { ...global, gridSize },
  };
  return dispatchGlobal(action);
}

export function changeTheme(global: IGlobal) {
  const action: GlobalAction = {
    type: actionTypes.CHANGE_THEME,
    global,
  };
  return dispatchGlobal(action);
}

export function changeAlgorithm(global: IGlobal) {
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
