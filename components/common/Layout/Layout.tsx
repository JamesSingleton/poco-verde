import React, { FC } from 'react';
import { Header, Footer } from '@components/common';

const Layout: FC = ({ children }) => (
  <>
    <div className="bg-white antialiased min-h-screen">
      <Header />
      <main className="overflow-hidden">{children}</main>
      <Footer />
    </div>
  </>
);

export default Layout;
