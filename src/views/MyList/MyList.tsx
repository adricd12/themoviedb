import MoviesList from '@/components/MoviesList';
import styles from './styles.module.scss';
import { useMyList } from './hooks/useMyList';

const {
    mainContainer,
} = styles;

const MyList = () => {
    const {
        moviesList,
    } = useMyList();

    return (
        <div className={mainContainer} data-testid='my-list-main-container'>
            <MoviesList titleText='My List' moviesList={moviesList} />
        </div>
    );
}

export default MyList;