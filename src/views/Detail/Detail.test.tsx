import '@testing-library/jest-dom';
import { render } from '@/test/test-utils';
import Detail from '.';
import { ApiState, Movie } from '@/api/types';
import { useDetail } from './hooks/useDetail';

jest.mock('./components/MovieDataSkeleton', () => function MovieDataSkeleton() {
return <div data-testid="detail-skeleton"></div>;
});

jest.mock('@/components/MovieItem', () => function MovieItem() {
    return <div></div>;
});

jest.mock('./components/MovieData', () => function MovieData() {
    return <div></div>;
});

jest.mock('./hooks/useDetail');
const mockUseDetail = useDetail as jest.MockedFunction<typeof useDetail>

const setup = (loading: ApiState) => {
    mockUseDetail.mockReturnValue({
        loadingMovie: loading,
        movie: {} as Movie,
    });
    const context = render(<Detail movieId={'1'} />);
    return context;
}

describe('Detail View', () => {

    it('should render skeleton when detail loading', () => {
        const context = setup(ApiState.LOADING);
        const skeleton = context.getByTestId('detail-skeleton');
        expect(skeleton).toBeInTheDocument();
    });

  it('should render elements when detail loaded', () => {
    const context = setup(ApiState.SUCCESS);
    const container = context.getByTestId('detail-main-container');
    const title = context.getByTestId('title-container');
    const details = context.getByTestId('details-container');
    expect(container).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(details).toBeInTheDocument();
  });
});