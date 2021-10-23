interface IGlobal {
  start: boolean;
}

declare type GlobalState = {
  start: boolean;
};

declare type GlobalAction = {
  type: string;
  global: IGlobal;
};

interface IArticle {
  id: number;
  title: string;
  body: string;
}

type ArticleState = {
  articles: IArticle[];
};

type ArticleAction = {
  type: string;
  article: IArticle;
};

type DispatchArticleType = (args: ArticleAction) => ArticleAction;
type DispatchGlobalType = (args: GlobalAction) => GlobalAction;
