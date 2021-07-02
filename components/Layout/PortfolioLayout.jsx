import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { getLayout as getSiteLayout } from "./SiteLayout";

const PortfolioLayout = ({ children, ...props }) => {
  console.log({ props });
  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div>
            <nav className="sm:hidden" aria-label="Back">
              <a
                href="#"
                className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                <ChevronLeftIcon
                  className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                Back
              </a>
            </nav>
            <nav className="hidden sm:flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-4">
                <li>
                  <div>
                    <Link href="/portfolio">
                      <a className="text-sm font-medium text-gray-500 hover:text-gray-700">
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
                    <a
                      href="#"
                      className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                    >
                      BBQ
                    </a>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div className="mt-2 md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                Barbques
              </h2>
            </div>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export const getLayout = (page) =>
  getSiteLayout(<PortfolioLayout>{page}</PortfolioLayout>);

export default PortfolioLayout;
