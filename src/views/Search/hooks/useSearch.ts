import { createGuestSessionAction } from "@/redux/context/actions";
import { AppDispatch } from "@/redux/store";
import { getPopularMoviesAction, loadMorePopularMoviesAction } from "@/views/Search/redux/actions";
import { selectLoadingPopularMovies, selectPopularMovies } from "@/views/Search/redux/selectors";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useSearch = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [page, setPage] = useState(1);
    useEffect(() => {
        dispatch(createGuestSessionAction());
        dispatch(getPopularMoviesAction({page: 1}));
    }, [dispatch]);

    const loadingMovies = useSelector(selectLoadingPopularMovies);
    const moviesList = useSelector(selectPopularMovies);

    const handleInfiniteScroll = useCallback(() => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        const newPage = page + 1;
        setPage(newPage);
        dispatch(loadMorePopularMoviesAction({page: newPage}));
      }, [dispatch, page]);

    useEffect(() => {
        window.addEventListener('scroll', handleInfiniteScroll);
        return () => window.removeEventListener('scroll', handleInfiniteScroll);
      }, [handleInfiniteScroll]);

    return {
        loadingMovies,
        moviesList,
    };
}