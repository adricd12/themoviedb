import { ApiState, Movie } from "@/api/types";

export interface MovieDetail {
    movie: Movie;
    loading: ApiState;
}