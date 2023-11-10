import { AppDispatch } from "@/redux/store";
import { getPopularMoviesAction, searchMoviesAction } from "@/views/Search/redux/actions";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

export const useSearchBar = () => {
    const dispatch = useDispatch<AppDispatch>();

    const [querySearch, setQuerySearch] = useState('');

    const handleChangeQuery = useCallback((query: string) => {
        setQuerySearch(query);
    }, []);

    const handleSubmit = useCallback((e: (React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement>)) => {
        e.preventDefault();
        if (querySearch === '') {
            dispatch(getPopularMoviesAction({page: 1}));
        }
        else dispatch(searchMoviesAction({query: querySearch}));
    }, [dispatch,querySearch]);

    return {
        querySearch,
        handleChangeQuery,
        handleSubmit,
    }
}