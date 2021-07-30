import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { COMPANY_NAME_LONG } from '@/lib/constants';
import { getLayout as getSiteLayout } from './SiteLayout';

const BuilderLayout = ({ children }) => {
  const router = useRouter();
  const { asPath } = router;
  return (
    <>
      <Head>
        <title>{`DR Horton | ${COMPANY_NAME_LONG}`}</title>
        <meta
          name="description"
          content="Find the best Low Maintenance Desert Plants in Arizona with a Poco Verde Landscape Design. Contact us today for a free consultation at 480-893-3948!"
        />
      </Head>
      <div className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Image
              src="/images/builders/DR-Horton-logo.svg"
              alt="DR Horton Logo"
              height="113"
              width="300"
            />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export const getLayout = (page) =>
  getSiteLayout(<BuilderLayout>{page}</BuilderLayout>);

export default BuilderLayout;
