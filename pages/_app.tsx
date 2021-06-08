import "../styles/index.css";
import React, { FC } from "react";
import { AppProps } from "next/app";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default MyApp;
