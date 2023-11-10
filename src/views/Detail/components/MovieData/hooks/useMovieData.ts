import { Movie } from "@/api/types";
import { SquareOptions } from "@/components/SquareOptionsList/SquareOptionsList";
import { isGuestSessionExpired } from "@/helpers";
import { createGuestSessionAction } from "@/redux/context/actions";
import { selectGuestSession } from "@/redux/context/selectors";
import { AppDispatch } from "@/redux/store";
import { rateMovieAction } from "@/views/Detail/redux/actions";
import { selectMyListMovieById } from "@/views/MyList/redux/selectors";
import { addMovie } from "@/views/MyList/redux/slice";
import { MyMovie } from "@/views/MyList/redux/types";
import { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const RATINGS = [1,2,3,4,5,6,7,8,9,10];

export const useMovieData = (movie: Movie) => {
    const dispatch = useDispatch<AppDispatch>();
    
    const guestSession = useSelector(selectGuestSession);
    useEffect(() => {
        if (
            !(guestSession && guestSession.guest_session_id && !isGuestSessionExpired(new Date(guestSession.expires_at)))
        ) {
            dispatch(createGuestSessionAction());
        }
    }, [dispatch, guestSession]);

    const myListMovie = useSelector(state => selectMyListMovieById(state, movie.id));
    const [rating, setRating] = useState(0);
    useEffect(() => {
        if (myListMovie && myListMovie.my_rating) setRating(myListMovie.my_rating);
    }, [myListMovie]);

    const handleRate = useCallback((selectedRating: number) => {
        if (guestSession && guestSession.guest_session_id) {
            setRating(selectedRating);
            dispatch(rateMovieAction({
                movieId: Number(movie.id),
                rating: selectedRating,
                guestSession: guestSession.guest_session_id,
            }));
            const myMovie: MyMovie = {...movie, my_rating: selectedRating};
            dispatch(addMovie(myMovie));
        }
    }, [dispatch, guestSession, movie]);

    const rateOptions: SquareOptions[] = RATINGS.map((rating) => ({option: rating.toString(), value: rating.toString()}));
    return {
        rating,
        handleRate,
        rateOptions,
    };
}