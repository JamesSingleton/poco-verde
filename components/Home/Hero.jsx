/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
  return (
    <div className="text-center pt-16 bg-warm-gray-50 px-4 sm:pt-24 mx-auto max-w-7xl">
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block xl:inline">Poco</span>{" "}
        <span className="block text-emerald-700 xl:inline">Verde</span>
      </h1>
      <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
      </p>
      <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
        <div className="rounded-md shadow">
          <a
            href="#"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 md:py-4 md:text-lg md:px-10"
          >
            Get started
          </a>
        </div>
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
          <a
            href="#"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-emerald-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
          >
            Live demo
          </a>
        </div>
      </div>
    </div>
  );
}
