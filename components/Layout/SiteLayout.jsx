import Link from 'next/link';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import Header from './Header';
import Footer from './Footer';
import * as locales from '../../locale';

const SiteLayout = ({ children }) => {
  const router = useRouter();
  const { locale, defaultLocale, pathname, asPath } = router;
  const localeCopy = locales[locale];
  const messages = localeCopy[pathname] || localeCopy[asPath];

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={localeCopy}
    >
      <div className="bg-white antialiased min-h-screen">
        <Header />
        <main className="overflow-hidden">{children}</main>
        <Footer />
      </div>
    </IntlProvider>
  );
};

export const getLayout = (page) => <SiteLayout>{page}</SiteLayout>;

export default SiteLayout;
