import { RootState } from "@/redux/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectLoadingPopularMovies = createSelector((state: RootState) => state.moviesList, (state) => state.loading);
export const selectPopularMovies = createSelector((state: RootState) => state.moviesList, (state) => state.movies);