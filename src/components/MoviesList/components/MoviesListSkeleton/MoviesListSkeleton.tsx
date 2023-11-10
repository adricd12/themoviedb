import { Skeleton } from "@mui/material";
import styles from './styles.module.scss';

const {
    skeletonContainer,
    skeletonRow,
} = styles;

const MoviesListSkeleton = () => {
    return (
        <div className={skeletonContainer}>
            <div className={skeletonRow}>
            <Skeleton variant="rectangular" width={200} height={300} />
            <Skeleton variant="rectangular" width={200} height={300} />
            <Skeleton variant="rectangular" width={200} height={300} />
            <Skeleton variant="rectangular" width={200} height={300} />
            <Skeleton variant="rectangular" width={200} height={300} />
            </div>
            <div className={skeletonRow}>
            <Skeleton variant="rectangular" width={200} height={300} />
            <Skeleton variant="rectangular" width={200} height={300} />
            <Skeleton variant="rectangular" width={200} height={300} />
            <Skeleton variant="rectangular" width={200} height={300} />
            <Skeleton variant="rectangular" width={200} height={300} />
            </div>
        </div>
    )
}

export default MoviesListSkeleton;