import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { apiSliceCurrent } from "../services/apiSliceArticle/apiSliceArticle";
import { apiSliceArticleDb } from "../services/apiSliceArticleDb/apiSliceArticleDb";
import addArticlesReducer from "../features/sliceArticle";

export const store = configureStore({
  reducer: {
    articles: addArticlesReducer,
    [apiSliceCurrent.reducerPath]: apiSliceCurrent.reducer,
    [apiSliceArticleDb.reducerPath]: apiSliceArticleDb.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiSliceCurrent.middleware,
      apiSliceArticleDb.middleware
    ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
