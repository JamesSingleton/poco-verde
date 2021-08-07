import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { Layout } from '@components/common';

const navigation = [
  { name: 'Arabella', href: 'arabella', current: false },
  { name: 'Copperhead', href: 'copperhead', current: false },
  { name: 'Lucero', href: 'lucero', current: false },
  { name: 'Stone Butte', href: 'stone-butte', current: false },
];

const Builder = () => {
  console.log(useRouter());
  const { query, asPath } = useRouter();
  const { slug } = query;
  return (
    <>
      <NextSeo title={slug.toString().replace(/-/g, ' ')} />
      <div className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-4 lg:col-span-2">
              <nav className="space-y-1" aria-label="Sidebar">
                <div>
                  <h3
                    className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
                    id="projects-headline"
                  >
                    Communities
                  </h3>
                  <div
                    className="mt-1 space-y-1"
                    aria-labelledby="projects-headline"
                  >
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={`${asPath}/${item.href}`}
                        className="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700"
                      >
                        <span className="truncate">{item.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
            <div className="col-span-8 lg:col-span-10">
              <div className="text-center">
                <Image
                  src="/images/builders/DR-Horton-logo.svg"
                  alt="DR Horton Logo"
                  height="113"
                  width="300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          slug: 'dr-horton',
        },
        locale: 'en',
      },
    ],
    fallback: false,
  };
}

Builder.Layout = Layout;

export default Builder;
