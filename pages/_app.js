import 'bootstrap/dist/css/bootstrap.css';
import "../styles/global.css";
import Head from "next/head";

export default ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...pageProps} />
    </>
  );
};