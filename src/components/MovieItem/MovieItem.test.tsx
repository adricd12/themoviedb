import '@testing-library/jest-dom';
import MovieItem from '.';
import { render } from '@/test/test-utils';
import { MOCK_MOVIES } from '@/mocks/movies';
import { MovieItemSize } from './types/size';

const MOCK_MOVIE = MOCK_MOVIES[0];

const setup = (
    {size, isInteractive, showTitle}: {size?: MovieItemSize, isInteractive?: boolean, showTitle?: boolean}
) => {
    const context = render(
        <MovieItem
            movie={MOCK_MOVIE}
            size={size}
            isInteractive={isInteractive}
            showTitle={showTitle}
        />
    );
    return context;
}

describe('MovieItem Component', () => {
  it('should render items', () => {
    const context = setup({});
    const container = context.getByTestId('movie-item-container');
    const image = context.getByTestId('movie-item-image');
    const title = context.queryByTestId('movie-item-title');
    expect(container).toBeInTheDocument();
    expect(container).not.toHaveClass('interactive');
    expect(image).toBeInTheDocument();
    expect(title).toBeNull();
  });

  it('should render title if provided', () => {
    const context = setup({showTitle: true});
    const title = context.getByTestId('movie-item-title');
    expect(title).toBeInTheDocument();
  });

  it('should be interactive if provided', () => {
    const context = setup({isInteractive: true});
    const container = context.getByTestId('movie-item-container');
    expect(container).toHaveClass('interactive');
  });

  it('should change size if required', () => {
    const context = setup({size: MovieItemSize.MEDIUM, showTitle: true});
    const image = context.getByTestId('movie-item-image');
    const title = context.getByTestId('movie-item-title');
    expect(image).toHaveClass('medium');
    expect(title).toHaveClass('medium');
  });
});