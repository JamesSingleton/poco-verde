import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { InboxIcon, SparklesIcon } from "@heroicons/react/outline";
import { getLayout } from "../components/Layout/SiteLayout";
import Hero from "../components/Home/Hero";

const Index = () => (
  <>
    <Head>
      <title>
        Phoenix Arizona Landscaping Contractor | Poco Verde Pools and Landscape
        Inc
      </title>
      <meta
        name="description"
        content="Professional landscape and pool designers in Phoenix that can create your perfect landscape environment, Poco Verde Landscape has been in business for over 30 years, call for a quote at 480-893-3948!"
      />
    </Head>
    <Hero />
    <div className="bg-warm-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
          Trusted by popular builders
        </p>
        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <Image
              className="h-12"
              src="/images/builders/DR-Horton-logo.svg"
              alt="DR Horton Logo"
              height="48"
              width="105"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <Image
              className="h-12"
              src="/images/builders/KB-logo.svg"
              alt="KB Homes Logo"
              height="48"
              width="105"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <Image
              className="h-12"
              src="/images/builders/Brighton-Homes-logo.svg"
              alt="Brighton Homes Logo"
              height="48"
              width="105"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
            <Image
              className="h-12"
              src="/images/builders/Meritage-Homes-logo.svg"
              alt="Meritage Homes Logo"
              height="48"
              width="105"
            />
          </div>
          <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
            <Image
              className="h-12"
              src="/images/builders/David-Weekley-logo.svg"
              alt="David Weekley Logo"
              height="48"
              width="105"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="relative pt-16 pb-32 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
      />
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Welcome to Poco Verde Pools and Landscaping
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Poco Verde has been serving the valley of the sun for over 35
                  years. Since our inception in 1979, we have completed over
                  65,000 residential and commercial projects. Our staff includes
                  a Landscape and Pool Architect, an Arizona Certified
                  Nurseryman, Horticultural Specialists, and Master Gardeners.
                  We provide water scapes and landscape services from remodels
                  to new construction on commercial and residential homes.
                </p>
                <div className="mt-6">
                  <Link href="/portfolio">
                    <a className="inline-flex bg-gradient-to-r from-teal-600 to-emerald-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-teal-700 hover:to-emerald-700">
                      Portfolio
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <Image
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/images/portfolio/pool-18.jpg"
                alt="Inbox user interface"
                width="1024"
                height="768"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Our Mission
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Provide every customer the highest level of service, quality
                  and value along with new and innovative products and designs.
                </p>
                <div className="mt-6">
                  <Link href="/contact-us">
                    <a className="inline-flex bg-gradient-to-r from-teal-600 to-emerald-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-teal-700 hover:to-emerald-700">
                      Contact Us
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <Image
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/images/portfolio/commercial-project-16.jpg"
                alt="Customer profile user interface"
                width="551.6"
                height="502"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

Index.getLayout = getLayout;

export default Index;
