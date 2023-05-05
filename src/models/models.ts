export interface ServerResponse {
  status: string;
  totalResults: number;
  articles: ITest[];
}

export interface ITest {
  source: Source;
  author?: string;
  title: string;
  description?: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content: string;
}

export interface Source {
  id?: string;
  name: string;
}
