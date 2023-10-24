import fs from "fs";
import RSS from "rss";
import {TPosts} from "@/src/types";

export default async function generateRssFeed(allPosts: TPosts) {
    const site_url =
        process.env.NODE_ENV === "production"
            ? "https://hyeok.dev"
            : "http://localhost:3000";

    const feedOptions = {
        title: "Blog posts | RSS Feed",
        description: "1년차 프론트엔지니어 정준혁의 블로그입니다.",
        site_url: site_url,
        feed_url: `${site_url}/rss.xml`,
        image_url: `${site_url}/logo.jpeg`,
        pubDate: new Date(),
        copyright: `All rights reserved ${new Date().getFullYear()}`,
    };

    const feed = new RSS(feedOptions);

    // Add each individual post to the feed.
    allPosts.map((post) => {
        feed.item({
            title: post.title,
            description: post.summary ?? '',
            url: `${site_url}/posts/${post.slug}`,
            date: post.date.start_date ?? post.createdTime,
        });
    });

    // Write the RSS feed to a file as XML.
    fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }));
}