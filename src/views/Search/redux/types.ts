import { ApiState, Movie } from "@/api/types";

export interface MoviesList {
    movies: Movie[];
    loading: ApiState;
}