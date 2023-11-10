import { getMovieById, rateMovie } from "@/api/api";
import { RateMovieProps } from "@/api/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMovieByIdAction = createAsyncThunk(
    'getMovieByIdAction',
    async ({id}: {id: number}, {dispatch}) => {
        const movie = await dispatch(getMovieById.initiate(id, {forceRefetch: true}));
        return movie.data;
});

export const rateMovieAction = createAsyncThunk(
    'rateMovieAction',
    async (rateMovieProps: RateMovieProps, {dispatch}) => {
        await dispatch(rateMovie.initiate(rateMovieProps));
});