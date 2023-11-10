import '@testing-library/jest-dom';
import { render } from '@/test/test-utils';
import { MOCK_MOVIES } from '@/mocks/movies';
import MovieData from '.';
import { Movie } from '@/api/types';
import { selectGuestSession } from '@/redux/context/selectors';
import { MOCK_GUEST_SESSION } from '@/mocks/context';

jest.mock('@/components/SquareOptionsList', () => function SquareOptionsList() {
return <div data-testid="rater"></div>;
});

jest.mock('@/redux/context/selectors', () => {
    const originalModule = jest.requireActual('@/redux/context/selectors');
    return {
        ...originalModule,
        selectGuestSession: jest.fn(),
    }
});

const MOCK_MOVIE: Movie = MOCK_MOVIES[0];

const setup = () => {
    (selectGuestSession as unknown as jest.Mock).mockImplementation(() => MOCK_GUEST_SESSION);
    const context = render(<MovieData movie={MOCK_MOVIE} />);
    return context;
}

describe('MovieData View', () => {
it('should render movie data', () => {
    const context = setup();
    const container = context.getByTestId('movie-data-container');
    const title = context.getByTestId('movie-title');
    const releaseDate = context.getByTestId('movie-release-date');
    const overview = context.getByTestId('movie-overview');
    const averageVote = context.getByTestId('movie-average-vote');
    const rater = context.getByTestId('rater');
    expect(container).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(MOCK_MOVIE.title);
    expect(releaseDate).toBeInTheDocument();
    expect(releaseDate).toHaveTextContent(MOCK_MOVIE.release_date);
    expect(overview).toBeInTheDocument();
    expect(overview).toHaveTextContent(MOCK_MOVIE.overview);
    expect(averageVote).toBeInTheDocument();
    expect(averageVote).toHaveTextContent(MOCK_MOVIE.vote_average.toString());
    expect(rater).toBeInTheDocument();
    });
});