import { RootState } from "@/redux/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectMyListMovies = createSelector((state: RootState) => state.myList, (state) => state.movies);
export const selectMyListMovieById = createSelector(
        [  
            selectMyListMovies,
            (state, movieId) => movieId
        ],
        (movies, movieId) => movies.find((movie) => movie.id  === movieId)
      )
