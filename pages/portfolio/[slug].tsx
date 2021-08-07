import Image from 'next/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { Layout } from '@components/common';

const PortfolioItem = () => {
  const { asPath, query } = useRouter();
  const { formatMessage } = useIntl();
  const f = (id: string) => formatMessage({ id });

  const titleText = `${query?.slug.toString().replace(/-/g, '.')}.title.text`;
  const breadcrumbText = `${query?.slug
    .toString()
    .replace(/-/g, '.')}.breadcrumb.text`;

  return (
    <>
      <NextSeo
        title={`${f(titleText)}`}
        description={`Poco Verde Landscape has many custom landscape designs to offer - view our portfolio page for ${f(
          titleText
        ).toLowerCase()} to get some ideas for your home. Call for a quote at 480-893-3948!`}
      />
      <div className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div>
              <nav className="sm:hidden" aria-label="Back">
                <Link href="/portfolio">
                  <a className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
                    <ChevronLeftIcon
                      className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    Back
                  </a>
                </Link>
              </nav>
              <nav className="hidden sm:flex" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-4">
                  <li>
                    <div>
                      <Link href="/">
                        <a className="text-sm font-medium text-gray-500 hover:text-gray-700">
                          Home
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <ChevronRightIcon
                        className="flex-shrink-0 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <Link href="/portfolio">
                        <a className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                          Portfolio
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <ChevronRightIcon
                        className="flex-shrink-0 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <Link href={asPath}>
                        <a className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                          {f(breadcrumbText)}
                        </a>
                      </Link>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
            <div className="mt-2 md:flex md:items-center md:justify-between">
              <div className="flex-1 min-w-0">
                <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                  {f(titleText)}
                </h1>
              </div>
            </div>
          </div>
          <div>
            <div className="my-4">
              <ul
                role="list"
                className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
              >
                <li className="relative">
                  <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-emerald-500 overflow-hidden">
                    <Image
                      src="https://res.cloudinary.com/dndhwi9i4/image/upload/v1625628475/Poco%20Verde/Portfolio/Granite%20Colors/castle-brown.jpg"
                      alt=""
                      className="object-cover pointer-events-none group-hover:opacity-75"
                      layout="fill"
                    />
                  </div>
                  <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                    Granite Color
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PortfolioItem.Layout = Layout;

export async function getStaticProps() {
  return {
    props: {},
  };
}
export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: 'turf' }, locale: 'en' },
      { params: { slug: 'bbq' }, locale: 'en' },
      { params: { slug: 'commercial-projects' }, locale: 'en' },
      { params: { slug: 'concrete-pavers' }, locale: 'en' },
      { params: { slug: 'courtyards' }, locale: 'en' },
      { params: { slug: 'deco-wall' }, locale: 'en' },
      { params: { slug: 'firepits' }, locale: 'en' },
      { params: { slug: 'front-yard-desert' }, locale: 'en' },
      { params: { slug: 'fireplaces' }, locale: 'en' },
      { params: { slug: 'granite-colors' }, locale: 'en' },
      { params: { slug: 'pools' }, locale: 'en' },
      { params: { slug: 'ramada' }, locale: 'en' },
      { params: { slug: 'recreational-areas' }, locale: 'en' },
      { params: { slug: 'spas' }, locale: 'en' },
      { params: { slug: 'travertine-pavers' }, locale: 'en' },
      { params: { slug: 'water-features' }, locale: 'en' },
    ],
    fallback: false,
  };
};

export default PortfolioItem;
