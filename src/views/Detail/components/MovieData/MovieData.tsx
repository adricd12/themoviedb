import SquareOptionsList from '@/components/SquareOptionsList';
import styles from './styles.module.scss';
import { useMovieData } from './hooks/useMovieData';
import { Movie } from '@/api/types';

const {
    movieData,
    title,
    releaseDate,
    overview,
    averageVote,
} = styles;

interface MovieDataProps {
    movie: Movie;
}

const MovieData: React.FC<MovieDataProps> = ({movie}) => {
    const {
        rating,
        rateOptions,
        handleRate,
    } = useMovieData(movie);
    return (
    <div className={movieData} data-testid='movie-data-container'>
        <p className={title} data-testid='movie-title'>{movie.title}</p>
        <p className={releaseDate} data-testid='movie-release-date'>{movie.release_date}</p>
        <p className={overview} data-testid='movie-overview'>{movie.overview}</p>
        <p className={averageVote} data-testid='movie-average-vote'>Rating: {movie.vote_average}</p>
        <SquareOptionsList options={rateOptions} handleClickOption={handleRate} selectedOption={rating.toString()} />
    </div>
    );
}

export default MovieData;