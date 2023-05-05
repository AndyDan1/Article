import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  articleItem,
  IArticlesReducer,
  articlesInitialState,
} from "./articleState";

export const slice = createSlice({
  name: "addArticles",
  initialState: articlesInitialState,
  reducers: {
    addNewArticle: (
      state: IArticlesReducer,
      action: PayloadAction<articleItem>
    ) => {
      state.articles.push(action.payload);
    },
    sliceHandlePin: (
      state: IArticlesReducer,
      action: PayloadAction<number>
    ) => {
      state.articles.forEach((article) => {
        article.pinned = false;
        if (article.id === action.payload) {
          article.pinned = !article.pinned;
        }
        return article;
      });
      const pinned = state.articles.filter((article) => article.pinned);
      const notPinned = state.articles.filter((article) => !article.pinned);
      notPinned.sort((a, b) => a.id - b.id);
      notPinned.unshift(...pinned);
      state.articles = notPinned;
    },
    sliceHandleUnPin: (
      state: IArticlesReducer,
      action: PayloadAction<number>
    ) => {
      state.articles = state.articles
        .map((article) => {
          if (article.id === action.payload) {
            article.pinned = false;
          }
          return article;
        })
        .sort((a, b) => a.id - b.id);
    },
  },
});

export const { addNewArticle, sliceHandlePin, sliceHandleUnPin } =
  slice.actions;

export default slice.reducer;