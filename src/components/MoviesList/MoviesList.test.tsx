import '@testing-library/jest-dom';
import { render } from '@/test/test-utils';
import { MOCK_MOVIES } from '@/mocks/movies';
import MoviesList from '.';
import { ApiState } from '@/api/types';

jest.mock('./components/MoviesListSkeleton', () => function MoviesListSkeleton() {
    return <div data-testid="skeleton"></div>;
});

jest.mock('@/components/SquareOptionsList', () => function SquareOptionsList() {
    return <div data-testid="sizes"></div>;
});

jest.mock('@/components/MovieItem', () => function MovieItem() {
    return <div data-testid="movie-item"></div>;
});

const MOCK_TITLE = 'MOCK_TITLE';

const setup = (
    {loading, title}: {loading?:  ApiState, title?: string}
) => {
    const context = render(
        <MoviesList
            moviesList={MOCK_MOVIES}
            loading={loading}
            titleText={title}
        />
    );
    return context;
}

describe('MoviesList Component', () => {
    it('should render skeleton when loading', () => {
        const context = setup({loading: ApiState.LOADING});
        const skeleton = context.getByTestId('skeleton');
        expect(skeleton).toBeInTheDocument();
    });

    it('should render items', () => {
        const context = setup({});
        const container = context.getByTestId('movies-list-container');
        const title = context.getByTestId('movies-list-title');
        const list = context.getByTestId('movies-list');
        const sizes = context.getByTestId('sizes');
        const movies = context.getAllByTestId('movie-item');
        expect(container).toBeInTheDocument();
        expect(title).toBeInTheDocument();
        expect(list).toBeInTheDocument();
        expect(sizes).toBeInTheDocument();
        expect(movies.length).toBe(MOCK_MOVIES.length);
    });

    it('should change title if provided', () => {
        const context = setup({title: MOCK_TITLE});
        const title = context.getByTestId('movies-list-title');
        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent(MOCK_TITLE);
    });
});