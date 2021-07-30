import Image from 'next/image';
import Link from 'next/link';
import { getLayout } from '@/components/Layout/PortfolioLayout';

const PortfolioItem = (props) => {
  return (
    <>
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
    </>
  );
};

PortfolioItem.getLayout = getLayout;

export async function getStaticProps(context) {
  return {
    props: {},
  };
}
export const getStaticPaths = async ({ locales }) => {
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
