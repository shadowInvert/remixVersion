// import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import { Link, Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import stylesheet from "./tailwind.css";
import { ReactNode } from "react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  // ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : [])
];

export default function App() {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Layout>
      </body>
    </html>
  );
}

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Link to={"/"}>
        <h1>Hello World</h1>
      </Link>
    </div>
  );
};
