import Head from 'next/head';
import classNames from 'classnames';
import { getLayout } from '@/components/Layout/BuilderLayout';

const navigation = [
  { name: 'Dashboard', href: '#', current: false },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Documents', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
];

const Builder = () => {
  return (
    <>
      <Head />
      <div className="grid grid-cols-12 gap-4 my-4">
        <div className="col-span-2">
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
                    href={item.href}
                    className="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700"
                  >
                    <span className="truncate">{item.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
        <div className="col-span-10">Hello World</div>
      </div>
    </>
  );
};

export async function getStaticProps(context) {
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

Builder.getLayout = getLayout;

export default Builder;
