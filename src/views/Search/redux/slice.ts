import { createSlice } from "@reduxjs/toolkit";
import { MoviesList } from "./types";
import { ApiState } from "@/api/types";
import { getPopularMoviesAction, loadMorePopularMoviesAction, searchMoviesAction } from "./actions";

const initialState: MoviesList = {
    movies: [],
    loading: ApiState.IDDLE,
};

export const moviesListSlice = createSlice({
    name: 'moviesList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPopularMoviesAction.pending, (state) => {
            state.loading = ApiState.LOADING;
        });
        builder.addCase(getPopularMoviesAction.fulfilled, (state, action) => {
            state.movies = action.payload || [];
            state.loading = ApiState.SUCCESS;
        });
        builder.addCase(getPopularMoviesAction.rejected, (state) => {
            state.movies = [];
            state.loading = ApiState.FAILED;
        });
        builder.addCase(searchMoviesAction.pending, (state) => {
            state.loading = ApiState.LOADING;
        });
        builder.addCase(searchMoviesAction.fulfilled, (state, action) => {
            state.movies = action.payload || [];
            state.loading = ApiState.SUCCESS;
        });
        builder.addCase(searchMoviesAction.rejected, (state) => {
            state.movies = [];
            state.loading = ApiState.FAILED;
        });
        builder.addCase(loadMorePopularMoviesAction.fulfilled, (state, action) => {
            if (action.payload) {
                const movies = state.movies;
                const mergeMovies = movies.concat(action.payload || []);
                state.movies = mergeMovies;
            }
            state.loading = ApiState.SUCCESS;
        });
    }
});

export default moviesListSlice.reducer;