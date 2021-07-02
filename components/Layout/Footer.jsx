import Link from "next/link";

const navigation = {
  main: [
    { name: "Contact Us", href: "/contact-us" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Accessibility", href: "#" },
    { name: "Partners", href: "#" },
  ],
};

const Footer = () => (
  <footer className="bg-white">
    <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav
        className="-mx-5 -my-2 flex flex-wrap justify-center"
        aria-label="Footer"
      >
        {navigation.main.map((item) => (
          <div key={item.name} className="px-5 py-2">
            <Link href={item.href}>
              <a className="text-base text-gray-500 hover:text-gray-900">
                {item.name}
              </a>
            </Link>
          </div>
        ))}
      </nav>
      <p className="mt-8 text-center text-base text-gray-500">
        &copy; 2021 Singleton, Inc. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
