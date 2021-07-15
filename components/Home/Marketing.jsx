import Image from 'next/image';
import Link from 'next/link';

const Marketing = () => {
  return (
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
                src="https://res.cloudinary.com/dndhwi9i4/image/upload/v1625628476/Poco%20Verde/Portfolio/Pools/pool-18_ztzs20.jpg"
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
                src="https://res.cloudinary.com/dndhwi9i4/image/upload/v1625628475/Poco%20Verde/Portfolio/Commercial%20Projects/commercial-project-16_g7ticr.jpg"
                alt="Customer profile user interface"
                width="551.6"
                height="502"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
