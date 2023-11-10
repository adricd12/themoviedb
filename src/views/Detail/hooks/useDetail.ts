import { useDispatch, useSelector } from "react-redux";
import { selectLoadingMovieDetail, selectMovieDetail } from "../redux/selectors";
import { AppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { getMovieByIdAction } from "../redux/actions";

export const useDetail = (movieId: string) => {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(getMovieByIdAction({id: Number(movieId)}));
    }, [dispatch, movieId]);

    const loadingMovie = useSelector(selectLoadingMovieDetail);
    const movie = useSelector(selectMovieDetail);

    return {
        loadingMovie,
        movie,
    };
}