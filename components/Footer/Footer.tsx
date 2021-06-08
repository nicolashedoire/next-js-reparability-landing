import React, { FC } from "react";
import Image from "next/image";
import NextLink from "next/link";
import FooterLinkList from "./FooterLinkList";
import SocialMedias from "./SocialMedias";
import MobileApps from "./Apps";
import { productLinks, companyLinks, ressourceLinks } from "./links";

const Footer: FC = () => (
  <footer className="text-white shadow-xl bg-purple-700 pt-12">
    <div className="container max-w-5xl px-4 mx-auto">
      <div className="flex flex-col w-8/12 mx-auto sm:flex-row sm:w-full">
        <MobileApps />
        <FooterLinkList title="Domaines" links={productLinks} />
        <FooterLinkList title="Société" links={companyLinks} />
        <FooterLinkList title="Ressources" links={ressourceLinks} />
        <SocialMedias />
      </div>
      <div className="h-5 border-t border-white opacity-20" />
      <p className="pb-5 text-xs text-gray-100">
        © {new Date().getFullYear()} Repair Tous droits réservés ·{" "}
        <NextLink href="/terms">
          <a className="transition ease-in-out hover:text-white">
            Conditions générales d'utilisation et de ventes
          </a>
        </NextLink>
        ·{" "}
        <NextLink href="/cookies">
          <a className="transition ease-in-out hover:text-white">Cookies</a>
        </NextLink>{" "}
        ·{" "}
        <NextLink href="/legals">
          <a className="transition ease-in-out hover:text-white">
            Mentions légales
          </a>
        </NextLink>
      </p>
    </div>
  </footer>
);

export default Footer;
