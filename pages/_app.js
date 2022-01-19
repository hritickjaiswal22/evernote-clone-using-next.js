import Head from "next/head";
import { Fragment } from "react";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Evernote Clone</title>
        <meta
          name="description"
          content="An app for notes, so that nothing important slips from your mind"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
