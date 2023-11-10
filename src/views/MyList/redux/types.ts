import { Movie } from "@/api/types";

export interface MyList {
    movies: MyMovie[];
}

export interface MyMovie extends Movie {
    my_rating: number;
}