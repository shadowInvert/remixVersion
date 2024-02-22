import { LoaderFunction } from "@remix-run/node";
// Dynamic Routing  cf. https://
// static routing only
export const loader: LoaderFunction = async () => {
  const content = `
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
      <loc>https://your-domain/</loc>
      <lastmod>2024-02-22</lastmod>
      <priority>1.0</priority>
      </url>
      </urlset>
      `;
  // Return the response with the content, a status 200 message, and the appropriate headers for an XML page
  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      encoding: "UTF-8",
    },
  });
};
