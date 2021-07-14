import Link from "next/link";
import { useIntl } from "react-intl";
import { COMPANY_NAME } from "@/lib/constants";
import Logo from "@/components/Layout/Logo";

export default function Herp() {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  return (
    <div className="text-center bg-white px-4 pb-4 pt-12 mx-auto sm:pb-0">
      <div className="h-auto w-auto sm:w-2/4 mx-auto">
        <Logo classes="mx-auto" />
      </div>
      <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        {f("home.hero.slogan.text")}
      </p>
      <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
        <div className="rounded-md shadow">
          <Link href="/portfolio">
            <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 md:py-4 md:text-lg md:px-10">
              {f("portfolio.text")}
            </a>
          </Link>
        </div>
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
          <Link href="/contact-us">
            <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
              {f("contact.us.button.text")}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
