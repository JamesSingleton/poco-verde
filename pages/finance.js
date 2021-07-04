import Head from "next/head";
import { COMPANY_NAME_LONG } from "@/lib/constants";

const Finance = () => (
  <>
    <Head>
      <title>{`Finance | ${COMPANY_NAME_LONG}`}</title>
      <meta
        name="description"
        content="Finance your pool and landscaping needs!"
      />
    </Head>
    <div>
      <h1>Finance</h1>
    </div>
  </>
);

export default Finance;
