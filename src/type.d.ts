interface IGlobal {
  start: boolean;
  gridSize: number;
  algorithm: IAlgorithm;
}

declare type GlobalState = {
  start: boolean;
  gridSize: number;
  algorithm: IAlgorithm;
};

declare type GlobalAction = {
  type: string;
  global: IGlobal;
};

interface IAlgorithm {
  type: string;
  spaceComplexity: string;
  timeComplexity: string;
}

declare type AlgorithmState = {
  spaceComplexity: string;
  timeComplexity: string;
};

declare type AlgorithmAction = {
  type: string;
  global: IAlgorithm;
};

type DispatchArticleType = (args: AlgorithmAction) => AlgorithmAction;
type DispatchGlobalType = (args: GlobalAction) => GlobalAction;
