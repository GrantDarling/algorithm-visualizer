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
  fontFamily: string;
  infoBox: {
    background: string;
  };
  button: {
    color: string;
  };
}

interface ThemeState extends ITheme {}

declare type ThemeAction = {
  type: string;
  theme: ThemeState;
};

type DispatchGlobalType = (args: GlobalAction) => GlobalAction;

// Type Declarations
type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};
