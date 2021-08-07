import { NextSeo } from 'next-seo';
import { Layout } from '@components/common';

const Finance = () => (
  <>
    <NextSeo
      title="Finance"
      description="Finance your pool and landscaping needs through our preferred partners!"
    />
    <div>
      <h1>Finance</h1>
    </div>
  </>
);

Finance.Layout = Layout;

export default Finance;
