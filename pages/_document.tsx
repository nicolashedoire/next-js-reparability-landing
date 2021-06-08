import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import GlobalMeta from "../components/AppScripts";

class MyDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return (
      <Html lang="fr">
        <Head>
          <GlobalMeta />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
