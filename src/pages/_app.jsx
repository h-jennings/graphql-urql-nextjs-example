import { PreviewModeControls } from '@components/common/PreviewModeControls';
import { RootLayout } from '@components/common/RootLayout';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import * as React from 'react';
import '../styles/globals.css';

const noIndex = process.env.NEXT_PUBLIC_NO_INDEX === 'true';

const MyApp = ({ Component, pageProps }) => {
  const { asPath } = useRouter();

  return (
    <>
      <DefaultSeo
        defaultTitle="Next.js Starter"
        titleTemplate="%s | Next.js Starter"
        description="Default description goes here"
        dangerouslySetAllPagesToNoIndex={noIndex}
        dangerouslySetAllPagesToNoFollow={noIndex}
      />
      <RootLayout>
        <Component key={asPath} {...pageProps} />
      </RootLayout>
      <PreviewModeControls />
    </>
  );
};

export default MyApp;
