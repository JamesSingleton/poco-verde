import Image from "next/image";
import { useIntl } from "react-intl";

const Builders = () => {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
          {f("builders.title.text")}
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
  );
};

export default Builders;
