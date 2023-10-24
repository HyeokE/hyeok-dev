import Document, { Html, Head, Main, NextScript } from 'next/document';
import CONFIG from 'morethan-log.config';
import CJK from '@libs/cjk';
import { Analytics } from '@vercel/analytics/react';

class MyDocument extends Document {
  render() {
    return (
      <Html lang={CONFIG.lang}>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <meta name="description" content="Description" />
          <meta name="keywords" content="Keywords" />
          <link rel="manifest" href="/manifest.json" />
          <link href="/icon.png" rel="icon" type="image/png" sizes="16x16" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#317EFB" />
          {/* font setting */}
          <>
            <link
              rel="preload"
              href="/fonts/SpoqaHanSansNeo-Thin.woff2"
              as="font"
              type="font/woff2"
              crossOrigin="anonymous"
            />
            <link
              rel="preload"
              href="/fonts/SpoqaHanSansNeo-Regular.woff2"
              as="font"
              type="font/woff2"
              crossOrigin="anonymous"
            />
            <link
              rel="preload"
              href="/fonts/SpoqaHanSansNeo-Medium.woff2"
              as="font"
              type="font/woff2"
              crossOrigin="anonymous"
            />
            <link
              rel="preload"
              href="/fonts/SpoqaHanSansNeo-Bold.woff2.woff2"
              as="font"
              type="font/woff2"
              crossOrigin="anonymous"
            />
          </>
          {['zh', 'ja', 'ko'].includes(CONFIG.lang.slice(0, 2).toLocaleLowerCase()) && (
            <>
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
              <link
                rel="preload"
                as="style"
                href={`https://fonts.googleapis.com/css2?family=Noto+Sans+${CJK()}:wght@400;500;700&display=swap`}
              />
              <link
                rel="stylesheet"
                href={`https://fonts.googleapis.com/css2?family=Noto+Sans+${CJK()}:wght@400;500;700&display=swap`}
              />
              <noscript>
                <link
                  rel="stylesheet"
                  href={`https://fonts.googleapis.com/css2?family=Noto+Sans+${CJK()}:wght@400;500;700&display=swap`}
                />
              </noscript>
            </>
          )}
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="192x192" href="/icon.png"></link>
          <link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="/feed"></link>
          {/* theme setting */}
          <meta name="theme-color" content={'#f1f3f5'} />
          {/* google search console */}
          {CONFIG.googleSearchConsole.enable === true && (
            <>
              <meta
                name="google-site-verification"
                content={CONFIG.googleSearchConsole.config.siteVerification}
              />
            </>
          )}
          {CONFIG.naverSearchConsole.enable === true && (
            <>
              <meta
                name="naver-site-verification"
                content={CONFIG.naverSearchConsole.config.siteVerification}
              />
            </>
          )}
        </Head>
        <body className="bg-day dark:bg-night transition-all duration-300">
          <Main />
          <NextScript />
          <Analytics />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
