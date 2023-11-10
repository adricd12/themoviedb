import '@testing-library/jest-dom';
import Search from '.';
import { useSearch } from './hooks/useSearch';
import { ApiState, Movie } from '@/api/types';
import { render } from '@/test/test-utils';

jest.mock('./hooks/useSearch');

const mockUseSearch = useSearch as jest.MockedFunction<typeof useSearch>

jest.mock('@/components/SearchBar', () => function SearchBar() {
    return <div data-testid="search-bar-component"></div>;
  });

jest.mock('@/components/MoviesList', () => function MoviesList() {
return <div data-testid="movies-list-component"></div>;
});

const setup = () => {
    mockUseSearch.mockReturnValue({
        loadingMovies: ApiState.IDDLE,
        moviesList: [] as Movie[]
    });
    const context = render(<Search />);
    return context;
}

describe('Search View', () => {
  it('should render', () => {
    const context = setup();
    const container = context.getByTestId('search-main-container');
    const searchBar = context.getByTestId('search-bar-component');
    const moviesList = context.getByTestId('movies-list-component');
    expect(container).toBeInTheDocument();
    expect(searchBar).toBeInTheDocument();
    expect(moviesList).toBeInTheDocument();
  })
});