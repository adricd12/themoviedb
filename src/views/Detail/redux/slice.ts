import { createSlice } from "@reduxjs/toolkit";
import { MovieDetail } from "./types";
import { ApiState, Movie } from "@/api/types";
import { getMovieByIdAction } from "./actions";

const initialState: MovieDetail = {
    movie: {} as Movie,
    loading: ApiState.IDDLE,
};

export const movieDetailSlice = createSlice({
    name: 'movieDetail',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMovieByIdAction.pending, (state) => {
            state.loading = ApiState.LOADING;
        });
        builder.addCase(getMovieByIdAction.fulfilled, (state, action) => {
            state.movie = action.payload || {} as Movie;
            state.loading = ApiState.SUCCESS;
        });
        builder.addCase(getMovieByIdAction.rejected, (state) => {
            state.movie = {} as Movie;
            state.loading = ApiState.FAILED;
        });
    }
});

export default movieDetailSlice.reducer;