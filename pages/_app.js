import Head from "next/head";
import { Fragment } from "react";
import { initializeApp } from "firebase/app";
import { Provider } from "react-redux";

import { firebaseConfig } from "../firebase/firebaseConfig";
import store from "../store/index";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  initializeApp(firebaseConfig);
  return (
    <Fragment>
      <Head>
        <title>Evernote Clone</title>
        <meta
          name="description"
          content="An app for notes, so that nothing important slips from your mind"
        />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Fragment>
  );
}

export default MyApp;
