import TopBar from '@/components/TopBar';
import Head from 'next/head';

interface DefaultLayoutProps {
  children: JSX.Element;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({children}) => {
  return (
    <>
      <Head>
        <title>{'themoviedb'}</title>
        <meta name='description' content='themoviedb - ipglobal technical test'/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <TopBar />
      {children}
    </>
  );
}

export default DefaultLayout;