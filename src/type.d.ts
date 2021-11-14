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
  core_main: string;
  core_deep: string;
  core_light: string;
  core_accent: string;
  core_sort_start: string;
  core_sort_end: string;
  font_family: string;
}

interface ThemeState extends ITheme {}

declare type ThemeAction = {
  type: string;
  theme: ThemeState;
};

type DispatchGlobalType = (args: GlobalAction) => GlobalAction;

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};
