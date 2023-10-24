import { getServerSideSitemap } from "next-sitemap";
import { GetServerSideProps } from "next";
import CONFIG from "@/morethan-log.config";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')
  const fields = [
    {
      loc: `${CONFIG.link}`, // Absolute url
      lastmod: new Date().toISOString(),
    },
  ];
  return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
export default () => {};
