import Script from "next/script";
import CONFIG from "morethan-log.config";

const Scripts: React.FC = () => (
  <>
    {CONFIG?.googleAnalytics?.enable === true && (
      <>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${CONFIG.googleAnalytics.config.measurementId}`}
        />
        <Script strategy="lazyOnload" id="ga">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${CONFIG.googleAnalytics.config.measurementId}', {
              page_path: window.location.pathname,
            });`}
        </Script>
      </>
    )}
    <script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3261859533984772"
      crossOrigin="anonymous"
    ></script>
    {/* Global Site Tag (gtag.js) - Google Analytics */}
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=G-07RYXQL1X0`}
    />
    <Script
      id="gtag-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-07RYXQL1X0', {
              page_path: window.location.pathname,
            });
          `,
      }}
    />
  </>
);

export default Scripts;
