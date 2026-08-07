import WPAPI from "wpapi";

const wordpressUrl = process.env.NEXT_PUBLIC_WORDPRESS_BLOGS_URL;

if (!wordpressUrl) {
  throw new Error("NEXT_PUBLIC_WORDPRESS_BLOGS_URL is not configured");
}

export const wp = new WPAPI({
  endpoint: `${wordpressUrl.replace(/\/+$/, "")}/wp-json`,
});
