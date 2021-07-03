import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import files from "@/data/portfolio.json";
import { COMPANY_NAME_LONG, PORTFOLIO_DESCRIPTION } from "@/lib/constants";

const Portfolio = () => (
  <>
    <Head>
      <title>{`Portfolio | ${COMPANY_NAME_LONG}`}</title>
      <meta name="description" content={PORTFOLIO_DESCRIPTION} />
    </Head>
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          Portfolio
        </h1>
        <p className="text-sm font-medium text-gray-500">
          Click on a category below to view the gallery by Poco Verde Landscape
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-4">
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          {files.map((file) => (
            <li key={file.source} className="relative">
              <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                <Image
                  src={file.source}
                  alt=""
                  className="object-cover pointer-events-none group-hover:opacity-75"
                  layout="fill"
                />
                <Link href={file.href}>
                  <a className="absolute inset-0 focus:outline-none">
                    <span className="sr-only">
                      View details for {file.title}
                    </span>
                  </a>
                </Link>
              </div>
              <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                {file.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </>
);

export default Portfolio;
