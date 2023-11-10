import { Skeleton } from "@mui/material";
import styles from './styles.module.scss';

const {
    skeletonContainer,
} = styles;

const MovieDataSkeleton = () => {
    return (
        <div className={skeletonContainer}>
            <Skeleton variant="rectangular" width={400} height={600} />
            <Skeleton variant="rectangular" width={800} height={600} />
        </div>
    )
}

export default MovieDataSkeleton;