import DefaultLayout from '@/layouts/DefaultLayout';
import Detail from '@/views/Detail';

interface DetailPageProps {
  params: {
    movieId: string;
  };
  query: {
    movieId: string;
  };
}

export async function getServerSideProps(context: DetailPageProps) {
  return {
    props: {
      movieId: context.params.movieId,
    },
  };
}

interface detailPageProps {
  movieId: string;
}
export default function detailPage(props: detailPageProps) {
  return (
    <DefaultLayout>
      <Detail {...props} />
    </DefaultLayout>
  );
}