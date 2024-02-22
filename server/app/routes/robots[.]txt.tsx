export const loader = () => {
  // handle "GET" request
  // set up our text content that will be returned in the response
  // Disaallow is listed as an exception
  const robotText = `
          User-agent: *
          Sitemap: http:// http://your-domain/sitemap.xml
          Allow: /
  
          User-agent: Googlebot-Image
          Disallow: /introduction/me.jpg
          Disallow: /build/_assets/me.jpg
          Disallow: /build/_assets/me.jpg
  
          User-agent: Googlebot
          Disallow: /nogooglebot/
  
          `;
  // return the text content, a status 200 success response, and set the content type to text/plain
  return new Response(robotText, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
};
