import Link from "next/link";

export default function Herp() {
  return (
    <div className="text-center py-16 bg-warm-gray-50 px-4 sm:pt-24 mx-auto">
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="">Poco</span>{" "}
        <span className="text-emerald-600">Verde</span>
      </h1>
      <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Let us create your outdoor living area!
      </p>
      <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
        <div className="rounded-md shadow">
          <Link href="/portfolio">
            <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 md:py-4 md:text-lg md:px-10">
              Portfolio
            </a>
          </Link>
        </div>
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
          <Link href="/contact-us">
            <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-emerald-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
              Contact Us
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
