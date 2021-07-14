import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { InboxIcon, SparklesIcon } from "@heroicons/react/outline";
import { getLayout } from "@/components/Layout/SiteLayout";
import { Hero, Builders, Marketing } from "@/components/Home";
import { COMPANY_NAME_LONG, DEFAULT_DESCRIPTION } from "@/lib/constants";

const Index = () => (
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

Index.getLayout = getLayout;

export default Index;
