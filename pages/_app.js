import React from 'react';
import App from 'next/app';
import SiteLayout from '../components/Layout/SiteLayout';
import 'tailwindcss/tailwind.css';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    const getLayout =
      Component.getLayout || ((page) => <SiteLayout>{page}</SiteLayout>);

    return getLayout(<Component {...pageProps} />);
  }
}

export default MyApp;
