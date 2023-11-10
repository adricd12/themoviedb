import styles from './styles.module.scss';
import Image from 'next/image';
import { MovieItemSize } from './types/size';
import Link from 'next/link';
import { Movie } from '@/api/types';

const {
    movieItemContainer,
    moviePicture,
    movieTitle,
    interactive,
    small,
    medium,
    large,
    xLarge,
} = styles;

interface MovieItemProps {
    movie: Movie;
    size?: MovieItemSize;
    isInteractive?: boolean;
    showTitle?: boolean;
}

const MovieItem: React.FC<MovieItemProps> = ({ 
    movie,
    size = MovieItemSize.SMALL,
    isInteractive = false,
    showTitle = false,
 }) => {
    const imageLoader = ({src}: {src:string}) => src;
    const getSizeClass = (selectedSize: MovieItemSize) => {
        switch(selectedSize) {
            case MovieItemSize.SMALL:
                return small;
            case MovieItemSize.MEDIUM:
                return medium;
            case MovieItemSize.LARGE:
                return large;
            case MovieItemSize.XLARGE:
                return xLarge;
        }
    };

    const sizeClass = getSizeClass(size);
    const interactiveClass = isInteractive ? interactive : '';
    const linkURL =  isInteractive ? `/detail/${movie.id}` : '#';

    return (
        <div className={`${movieItemContainer} ${interactiveClass}`} data-testid='movie-item-container'>
            <Link href={linkURL}>
            <div className={`${moviePicture} ${sizeClass}`} data-testid='movie-item-image'>
                <Image src={movie.poster_path} alt={movie.title} loader={imageLoader} fill unoptimized />
            </div>
            </Link>
            {
                showTitle &&
                <p className={`${movieTitle} ${sizeClass}`} data-testid='movie-item-title'>
                    {movie.title}
                </p>
            }
        </div>
    )
}

export default MovieItem;