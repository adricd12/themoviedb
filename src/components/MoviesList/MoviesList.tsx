import styles from './styles.module.scss';
import MovieItem from '@/components/MovieItem';
import { MovieItemSize } from '@/components/MovieItem/types/size';
import { useMoviesList } from './hooks/useMoviesList';
import SquareOptionsList from '@/components/SquareOptionsList';
import { ApiState, Movie } from '@/api/types';
import MoviesListSkeleton from './components/MoviesListSkeleton';

const {
    moviesListContainer,
    header,
    title,
    movies,
    small,
    medium,
    large
} = styles;

interface MoviesListProps {
    moviesList: Movie[];
    loading?: ApiState;
    titleText?: string
}

const MoviesList: React.FC<MoviesListProps> = ({titleText = 'Movies', moviesList, loading}) => {
    const {
        size,
        handleChangeSize,
        sizeOptions,
    } = useMoviesList();

    const getSizeClass = (selectedSize: MovieItemSize) => {
        switch(selectedSize) {
            case MovieItemSize.SMALL:
                return small;
            case MovieItemSize.MEDIUM:
                return medium;
            case MovieItemSize.LARGE:
                return large;
        }
    };

    const sizeClass = getSizeClass(size);

    if (loading === ApiState.LOADING) return (<MoviesListSkeleton />);

    return (
        <div className={moviesListContainer} data-testid='movies-list-container'>
            <div className={header}>
                <div className={title} data-testid='movies-list-title'>
                    <h1>{titleText}</h1>
                </div>
                <SquareOptionsList options={sizeOptions} handleClickOption={handleChangeSize} selectedOption={size} />
            </div>
            <div className={`${movies} ${sizeClass}`} data-testid='movies-list'>
                {
                    moviesList.map((movie, index) => <MovieItem key={index} movie={movie} size={size} isInteractive showTitle />)
                }
            </div>
        </div>
    )
}

export default MoviesList;