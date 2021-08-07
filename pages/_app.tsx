import 'tailwindcss/tailwind.css';

import React, { FC, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Head } from '@components/common';
import * as locales from '@locale/index';

const Noop: FC = ({ children }) => <>{children}</>;

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;
  const { locale, defaultLocale } = useRouter();
  const messages = Object(locales)[locale];

  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);

  return (
    <IntlProvider
      locale={locale!}
      defaultLocale={defaultLocale}
      messages={messages}
    >
      <Head />
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </IntlProvider>
  );
}
