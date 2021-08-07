import { NextSeo } from 'next-seo';
import { useIntl } from 'react-intl';
import { Layout } from '@components/common';

const Notice = () => {
  const { formatMessage } = useIntl();
  const f = (id: string) => formatMessage({ id });
  return (
    <>
      <NextSeo title="20 Day Notice" />
      <div className="bg-gradient-to-b from-white to-warm-gray-50">
        <div className="py-24 lg:py-32">
          <div className="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl">
              20 Day Notice
            </h1>
            <p className="mt-6 text-xl text-warm-gray-500 max-w-3xl">
              {f('notice.description.text')}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

Notice.Layout = Layout;

export default Notice;
