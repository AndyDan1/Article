import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IArticle } from "./interfacesForArticle";
import { ServerResponse } from "../../models/models";
import { apiKey, link } from "../../assets/constants/link";

export const apiSliceCurrent = createApi({
  reducerPath: "newsapi",
  tagTypes: ["newsapi"],
  baseQuery: fetchBaseQuery({
    baseUrl: link.baseUrl,
  }),
  endpoints: (build) => ({
    getCurrent: build.query<IArticle[], number>({
      query: (count: number) => ({
        url: link.url,
        params: {
          q: "tesla",
          pageSize: count,
          apiKey: apiKey,
        },
      }),
      transformResponse: (response: ServerResponse) => {
        return response.articles.map((article) => ({
          title: article.title,
          urlToImage: article.urlToImage,
          author: article.author,
          description: article.description,
        }));
      },
    }),
  }),
});
export const { useGetCurrentQuery } = apiSliceCurrent;
