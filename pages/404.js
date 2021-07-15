import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className="flex-shrink-0 my-auto py-16 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">
        404 error
      </p>
      <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-2 text-base text-gray-500">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div className="mt-6">
        <Link href="/">
          <a className="text-base font-medium text-emerald-600 hover:text-emerald-500">
            Go back home<span aria-hidden="true"> &rarr;</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
