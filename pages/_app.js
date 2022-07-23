import "bootstrap/dist/css/bootstrap.css";
import "../styles/global.css";
import Head from "next/head";
import { useEffect } from "react";
import RouteGuard from "../hoc/routeGuard/routeGuard";

export default ({ Component, pageProps }) => {
  useEffect(() => {
    window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>SurgiList</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <RouteGuard>
        <Component {...pageProps} />
      </RouteGuard>
    </>
  );
};
