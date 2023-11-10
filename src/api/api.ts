import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GuestSession, Movie, RateMovieProps } from './types';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '8f781d70654b5a6f2fa69770d1d115a3';
const FILES_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    keepUnusedDataFor: 30,
    // refetchOnFocus: true,
    endpoints: (builder) => ({
        getPopularMovies: builder.query<Movie[], number>({
            query: (page = 1 ) => `/movie/popular?language=en-US&page=${page}&api_key=${API_KEY}`,
            transformResponse: (response: {page: number, results: Movie[]}): Movie[] => {
                return response.results.map((movie) => ({
                    ...movie,
                    poster_path: `${FILES_BASE_URL}${movie.poster_path}`
                }))
            }
        }),
        getMovieById: builder.query<Movie, number>({
            query: (id) => `/movie/${id}?api_key=${API_KEY}`,
            transformResponse: (response: Movie): Movie => {
                return {
                    ...response,
                    poster_path: `${FILES_BASE_URL}${response.poster_path}`
                }
            }
        }),
        searchMovies: builder.query<Movie[], string>({
            query: (query = '' ) => `/search/movie?language=en-US&page=1&query=${query}&api_key=${API_KEY}`,
            transformResponse: (response: {page: number, results: Movie[]}): Movie[] => {
                return response.results.map((movie) => ({
                    ...movie,
                    poster_path: `${FILES_BASE_URL}${movie.poster_path}`
                }))
            }
        }),
        rateMovie: builder.mutation<Movie[], RateMovieProps>({
            query: ({movieId, guestSession, rating}) => ({
                url: `/movie/${movieId}/rating?guest_session_id=${guestSession}&api_key=${API_KEY}`,
                method: 'POST',
                body: {value: rating},
            }),
        }),
        createGuestSession: builder.query<GuestSession, void>({
            query: () => `/authentication/guest_session/new?api_key=${API_KEY}`,
        }),
    }),
});

export const {
    getPopularMovies,
    getMovieById,
    searchMovies,
    rateMovie,
    createGuestSession,
} = api.endpoints;