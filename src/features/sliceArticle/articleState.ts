export type articleItem = {
  id: number;
  title: string;
  description: string;
  pinned: boolean;
};

export interface IArticlesReducer {
  articles: articleItem[];
}

export const articlesInitialState: IArticlesReducer = {
  articles: [
    {
      id: Date.now() + 1,
      title: "Article 1",
      description: "Description for article 1",
      pinned: true,
    },
    {
      id: Date.now() + 2,
      title: "Brticle 2",
      description: "Description for article 2",
      pinned: false,
    },
    {
      id: Date.now() + 3,
      title: "Crticle 3",
      description: "Description for article 3",
      pinned: false,
    },
    {
      id: Date.now() + 4,
      title: "asd 3",
      description: "asd",
      pinned: false,
    },
  ],
};
