interface IGlobal {
  start: boolean;
  gridSize: number;
  algorithm: IAlgorithm;
  theme: ITheme;
}

declare type GlobalState = {
  start: boolean;
  gridSize: number;
  algorithm: IAlgorithm;
  theme: ITheme;
};

declare type GlobalAction = {
  type: string;
  global: GlobalState;
};

interface IAlgorithm {
  type: string;
  spaceComplexity: string;
  timeComplexity: string;
}

declare type AlgorithmAction = {
  type: string;
  global: IAlgorithm;
};

interface ITheme {
  background: string;
  color: string;
}

interface ThemeState {
  background: string;
  color: string;
}

declare type ThemeAction = {
  type: string;
  theme: ThemeState;
};

type DispatchGlobalType = (args: GlobalAction) => GlobalAction;
