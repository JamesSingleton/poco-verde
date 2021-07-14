import Head from "next/head";
import Image from "next/image";
import { PhoneIcon, MailIcon } from "@heroicons/react/outline";
import { COMPANY_NAME_LONG } from "@/lib/constants";

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
    {/* Contact section */}
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
                <form
                  action="#"
                  method="POST"
                  className="mt-9 grid grid-cols-6 gap-6"
                >
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full shadow-sm sm:text-sm focus:ring-emerald-500 focus:border-emerald-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full shadow-sm sm:text-sm focus:ring-emerald-500 focus:border-emerald-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full shadow-sm sm:text-sm focus:ring-emerald-500 focus:border-emerald-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        aria-describedby="phone-description"
                        className="block w-full shadow-sm sm:text-sm focus:ring-emerald-500 focus:border-emerald-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Street address
                    </label>
                    <input
                      type="text"
                      name="street-address"
                      id="street-address"
                      autoComplete="street-address"
                      className="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      className="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      htmlFor="state"
                      className="block text-sm font-medium text-gray-700"
                    >
                      State / Province
                    </label>
                    <input
                      type="text"
                      name="state"
                      id="state"
                      className="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium text-gray-700"
                    >
                      ZIP / Postal
                    </label>
                    <input
                      type="text"
                      name="postal-code"
                      id="postal-code"
                      autoComplete="postal-code"
                      className="mt-1 focus:ring-emerald-500 focus:border-emerald-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6">
                    <div className="flex justify-between">
                      <label
                        htmlFor="how-can-we-help"
                        className="block text-sm font-medium text-gray-700"
                      >
                        How can we help you?
                      </label>
                      <span
                        id="how-can-we-help-description"
                        className="text-sm text-gray-500"
                      >
                        Max. 500 characters
                      </span>
                    </div>
                    <div className="mt-1">
                      <textarea
                        id="how-can-we-help"
                        name="how-can-we-help"
                        aria-describedby="how-can-we-help-description"
                        rows={4}
                        className="block w-full shadow-sm sm:text-sm focus:ring-emerald-500 focus:border-emerald-500 border border-gray-300 rounded-md"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <fieldset className="col-span-6">
                    <legend className="block text-sm font-medium text-gray-700">
                      Expected budget
                    </legend>
                    <div className="mt-4 grid grid-cols-1 gap-y-4">
                      <div className="flex items-center">
                        <input
                          id="budget-under-25k"
                          name="budget"
                          defaultValue="under_25k"
                          type="radio"
                          className="focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300"
                        />
                        <label htmlFor="budget-under-25k" className="ml-3">
                          <span className="block text-sm text-gray-700">
                            Less than $25K
                          </span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="budget-25k-50k"
                          name="budget"
                          defaultValue="25k-50k"
                          type="radio"
                          className="focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300"
                        />
                        <label htmlFor="budget-25k-50k" className="ml-3">
                          <span className="block text-sm text-gray-700">
                            $25K – $50K
                          </span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="budget-50k-100k"
                          name="budget"
                          defaultValue="50k-100k"
                          type="radio"
                          className="focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300"
                        />
                        <label htmlFor="budget-50k-100k" className="ml-3">
                          <span className="block text-sm text-gray-700">
                            $50K – $100K
                          </span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="budget-over-100k"
                          name="budget"
                          defaultValue="over_100k"
                          type="radio"
                          className="focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300"
                        />
                        <label htmlFor="budget-over-100k" className="ml-3">
                          <span className="block text-sm text-gray-700">
                            $100K+
                          </span>
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <div className="col-span-6">
                    <label
                      htmlFor="how-did-you-hear-about-us"
                      className="block text-sm font-medium text-gray-700"
                    >
                      How did you hear about us?
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="how-did-you-hear-about-us"
                        id="how-did-you-hear-about-us"
                        className="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="text-right col-span-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Quote;
