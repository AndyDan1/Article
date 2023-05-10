export type articleItem = {
  id: number;
  title: string;
  description: string;
  pinned: boolean;
};

export interface IArticlesReducer {
  articles: articleItem[];
  loading?: boolean;
  error?: string | null;
}

export const articlesInitialState: IArticlesReducer = {
  articles: [
    {
      id: 1683550035050,
      title: "Article 2",
      description: "typicode asdas asd",
      pinned: false,
    },
    {
      id: 1683550035060,
      title: "TypeScript1",
      description: "TypeScript1",
      pinned: true,
    },
    {
      id: 1683550035070,
      title: "TypeScript2",
      description: "TypeScript2",
      pinned: false,
    },
  ],
  loading: false,
  error: null,
};
