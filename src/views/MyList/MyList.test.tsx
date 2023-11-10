import '@testing-library/jest-dom';
import { useMyList } from './hooks/useMyList';
import { render } from '@/test/test-utils';
import { MyMovie } from './redux/types';
import MyList from '.';

jest.mock('./hooks/useMyList');

const mockUseMyList = useMyList as jest.MockedFunction<typeof useMyList>

jest.mock('@/components/MoviesList', () => function MoviesList() {
return <div data-testid="movies-list-component"></div>;
});

const setup = () => {
    mockUseMyList.mockReturnValue({
        moviesList: [] as MyMovie[]
    });
    const context = render(<MyList />);
    return context;
}

describe('MyList View', () => {
  it('should render', () => {
    const context = setup();
    const container = context.getByTestId('my-list-main-container');
    const moviesList = context.getByTestId('movies-list-component');
    expect(container).toBeInTheDocument();
    expect(moviesList).toBeInTheDocument();
  })
});