import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Titre par defaut" }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="h-auto">
      <Navbar />
    </header>
    {children}
    <Footer />
  </>
);

export default Layout;
