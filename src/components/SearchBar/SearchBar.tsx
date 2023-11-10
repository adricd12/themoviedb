import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import styles from './styles.module.scss';
import { useSearchBar } from './hooks/useSearchBar';


const {
    searchBarContainer,
    searchButton,
    searchInput,
} = styles;

const SearchBar = () => {
    const {
        querySearch,
        handleChangeQuery,
        handleSubmit,
    } = useSearchBar();
    return (
        <div className={searchBarContainer}>
            <form onSubmit={handleSubmit}>
            <IconButton className={searchButton} onClick={handleSubmit}>
                <SearchIcon />
            </IconButton>
            <input className={searchInput} type="text"
                placeholder="Search movies..."
                value={querySearch}
                onChange={(e) => handleChangeQuery(e.target.value)}
            />
            </form>
        </div>
    )
}

export default SearchBar;