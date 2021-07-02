import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

const SiteLayout = ({ children }) => (
  <div className="bg-white antialiased min-h-screen">
    <Header />
    <main className="overflow-hidden">{children}</main>
    <Footer />
  </div>
);

export const getLayout = (page) => <SiteLayout>{page}</SiteLayout>;

export default SiteLayout;
