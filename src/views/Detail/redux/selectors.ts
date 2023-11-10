import { RootState } from "@/redux/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectLoadingMovieDetail = createSelector((state: RootState) => state.movieDetail, (state) => state.loading);
export const selectMovieDetail = createSelector((state: RootState) => state.movieDetail, (state) => state.movie);