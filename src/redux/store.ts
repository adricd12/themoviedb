import { configureStore } from "@reduxjs/toolkit";
import { api } from "@/api/api";

import moviesList from "@/views/Search/redux/slice";
import movieDetail from "@/views/Detail/redux/slice";
import myList from "@/views/MyList/redux/slice";
import context from "./context/slice";

export const store = configureStore({
    reducer: {
        moviesList,
        movieDetail,
        myList,
        context,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;