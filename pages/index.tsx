import Head from 'next/head';
import { Builders, Marketing } from '@components/Home';
import { COMPANY_NAME_LONG, DEFAULT_DESCRIPTION } from '@lib/constants';
import { Layout } from '@components/common';
import { Hero } from '@components/ui';

const Home = () => (
  <>
    <Head>
      <title>
        {`Phoenix Arizona Landscaping Contractor | ${COMPANY_NAME_LONG}`}
      </title>
      <meta name="description" content={DEFAULT_DESCRIPTION} />
    </Head>
    <Hero />
    <Builders />
    <Marketing />
  </>
);

Home.Layout = Layout;

export default Home;
