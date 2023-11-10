import SearchBar from '@/components/SearchBar';
import MoviesList from '@/components/MoviesList';
import styles from './styles.module.scss';
import { useSearch } from './hooks/useSearch';

const {
    mainContainer,
} = styles;

const Search = () => {
    const {
        loadingMovies,
        moviesList,
    } = useSearch();

    return (
        <div className={mainContainer} data-testid='search-main-container'>
            <SearchBar />
            <MoviesList moviesList={moviesList} loading={loadingMovies} />
        </div>
    );
}

export default Search;