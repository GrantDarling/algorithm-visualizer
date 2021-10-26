import * as actionTypes from "./actionTypes";

export function addArticle(article: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.ADD_ARTICLE,
    article,
  };

  return dispatchArticle(action);
}

export function removeArticle(article: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.REMOVE_ARTICLE,
    article,
  };
  return dispatchArticle(action);
}

export function dispatchArticle(action: ArticleAction) {
  return (dispatch: DispatchArticleType) => {
    dispatch(action);
  };
}

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

export function dispatchGlobal(action: GlobalAction) {
  return (dispatch: DispatchGlobalType) => {
    dispatch(action);
  };
}
