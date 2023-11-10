import MovieItem from '@/components/MovieItem';
import { MovieItemSize } from '@/components/MovieItem/types/size';
import { useDetail } from './hooks/useDetail';
import styles from './styles.module.scss';
import MovieData from './components/MovieData';
import { ApiState } from '@/api/types';
import MovieDataSkeleton from './components/MovieDataSkeleton';

const {
    mainDetailContainer,
    title,
    details,
    movieData,
} = styles;

interface DetailProps {
    movieId: string;
}

const Detail: React.FC<DetailProps> = ({movieId}) => {

    const {
        loadingMovie,
        movie,
    } = useDetail(movieId);

    if (loadingMovie === ApiState.LOADING) return(<MovieDataSkeleton />);

    return (
        <div className={mainDetailContainer} data-testid='detail-main-container'>
            <div className={title} data-testid='title-container'>
                <h1>Details</h1>
            </div>
            <div className={details} data-testid='details-container'>
                <MovieItem movie={movie} size={MovieItemSize.XLARGE} />
                <MovieData movie={movie} />
            </div>
        </div>
    );
}

export default Detail;