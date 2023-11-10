import { useSelector } from "react-redux";
import { selectMyListMovies } from "../redux/selectors";

export const useMyList = () => {
    const moviesList = useSelector(selectMyListMovies);

    return {
        moviesList,
    };
}