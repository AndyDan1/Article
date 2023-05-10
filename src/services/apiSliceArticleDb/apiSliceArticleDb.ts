import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IArticleServDb } from "./interfacesForArticleDb";
import { link2 } from "../../assets/constants/link";

export const apiSliceArticleDb = createApi({
  reducerPath: "apiSliceArticleDb",
  tagTypes: ["articleDb"],
  baseQuery: fetchBaseQuery({
    baseUrl: link2.baseUrl,
  }),
  endpoints: (build) => ({
    getArticleDb: build.query<IArticleServDb[], string>({
      query: () => ({
        url: link2.url,
      }),
      transformResponse: (response: IArticleServDb[]) => {
        const itemTrue = response.filter((article) => article.pinned);
        const itemFalse = response
          .filter((article) => !article.pinned)
          .sort((a, b) => a.id - b.id);
        itemFalse.unshift(...itemTrue);
        return itemFalse;
      },
      providesTags: () => ["articleDb"],
    }),
    addArticle: build.mutation<IArticleServDb, IArticleServDb>({
      query: (article) => ({
        url: link2.url,
        method: "POST",
        body: article,
      }),
      invalidatesTags: ["articleDb"],
    }),
    removeArticle: build.mutation<IArticleServDb, number>({
      query: (id) => ({
        url: `article/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["articleDb"],
    }),
    pinnedAllArticle: build.mutation<IArticleServDb, number>({
      query: (arr) => ({
        url: `article`,
        method: "PATCH",
        body: arr,
      }),
      invalidatesTags: ["articleDb"],
    }),
    pinnedProduct: build.mutation<IArticleServDb, IArticleServDb>({
      query: (article) => ({
        url: `article/${article.id}`,
        method: "PATCH",
        body: article,
      }),

      invalidatesTags: ["articleDb"],
    }),
  }),
});
export const {
  useGetArticleDbQuery,
  useAddArticleMutation,
  useRemoveArticleMutation,
  usePinnedProductMutation,
} = apiSliceArticleDb;
