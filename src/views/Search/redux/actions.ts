import { getPopularMovies, searchMovies } from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPopularMoviesAction = createAsyncThunk(
    'getPopularMoviesAction',
    async ({page}: {page: number}, {dispatch}) => {
        const movies = await dispatch(getPopularMovies.initiate(page, {forceRefetch: true}));
        return movies.data;
});

export const loadMorePopularMoviesAction = createAsyncThunk(
    'loadMorePopularMoviesAction',
    async ({page}: {page: number}, {dispatch}) => {
        const movies = await dispatch(getPopularMovies.initiate(page, {forceRefetch: true}));
        return movies.data;
});

export const searchMoviesAction = createAsyncThunk(
    'searchMoviesAction',
    async ({query}: {query: string}, {dispatch}) => {
        const movies = await dispatch(searchMovies.initiate(query, {forceRefetch: true}));
        return movies.data;
});