import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import styles from './styles.module.scss';
import Link from 'next/link';

const {
    topBarContainer,
    topBarButton,
} = styles;

const TopBar = ({}) => {
  return (
    <div className={topBarContainer} data-testid='topbar-container'>
        <Link href='/search' data-testid='search-link'>
            <IconButton className={topBarButton}>
                <HomeIcon />
            </IconButton>
        </Link>
        <Link href='/mylist' data-testid='mylist-link'>
            <IconButton className={topBarButton}>
                <FormatListBulletedIcon />
            </IconButton>
        </Link>
    </div>
  );
}

export default TopBar;