import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { getLayout as getSiteLayout } from "./SiteLayout";
import { COMPANY_NAME_LONG } from "@/lib/constants";

const PortfolioLayout = ({ children }) => {
  const router = useRouter();
  const { locale, locales, defaultLocale, pathname, asPath } = router;
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });

  return (
    <>
      <Head>
        <title>{`${f("title")} | ${COMPANY_NAME_LONG}`}</title>
        <meta
          name="description"
          content={`Poco Verde Landscape has many custom landscape designs to offer - view our portfolio page for ${f(
            "title"
          ).toLowerCase()} to get some ideas for your home. Call for a quote at 480-893-3948!`}
        />
      </Head>
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
                          {f("breadcrumb")}
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
                  {f("title")}
                </h1>
              </div>
            </div>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export const getLayout = (page) =>
  getSiteLayout(<PortfolioLayout>{page}</PortfolioLayout>);

export default PortfolioLayout;
