import Head from 'next/head';
import Image from 'next/image';
import { PhoneIcon, MailIcon } from '@heroicons/react/outline';
import { COMPANY_NAME_LONG } from '@/lib/constants';
import FreeQuoteForm from '@/components/Quote/Form';

const Quote = () => (
  <>
    <Head>
      <title>{`Free Quote | ${COMPANY_NAME_LONG}`}</title>
      <meta
        name="description"
        content="Get a free quote for all your landscaping needs!"
      />
    </Head>
    <div className="bg-gradient-to-b from-white to-warm-gray-50">
      <div className="py-24 lg:py-32">
        <div className="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl">
            Free Quote
          </h1>
          <p className="mt-6 text-xl text-warm-gray-500 max-w-3xl">
            Want to get in touch? We&apos;d love to hear from you.
          </p>
        </div>
      </div>
    </div>
    <section className="relative bg-white" aria-labelledby="quoteHeading">
      <div
        className="absolute w-full h-1/2 bg-warm-gray-50"
        aria-hidden="true"
      />
      {/* Decorative dot pattern */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute z-0 top-0 right-0 transform -translate-y-16 translate-x-1/2 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
          width={404}
          height={384}
          fill="none"
          viewBox="0 0 404 384"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-warm-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={384}
            fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
          />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="relative bg-white shadow-xl">
          <h2 id="quoteHeading" className="sr-only">
            Free Quote
          </h2>

          <div className="hidden lg:block lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <Image
                className="h-56 w-full object-cover lg:absolute lg:h-full"
                src="https://res.cloudinary.com/dndhwi9i4/image/upload/v1625628477/Poco%20Verde/Portfolio/Front%20Yard%20Desert/front-yard-desert_vr614a.jpg"
                alt="Front Yard Desert"
                layout="fill"
              />
            </div>
          </div>
          <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
            <div className="lg:pr-8">
              <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Let&apos;s work together
                </h2>
                <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                  We’d love to work with you! Send us a message using the form
                  below, or email us.
                </p>
                <FreeQuoteForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Quote;
