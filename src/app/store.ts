import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { apiSliceCurrent } from "../services/apiSliceArticle";
import addArticlesReducer from "../features/sliceArticle";

export const store = configureStore({
  reducer: {
    articles: addArticlesReducer,
    [apiSliceCurrent.reducerPath]: apiSliceCurrent.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSliceCurrent.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
