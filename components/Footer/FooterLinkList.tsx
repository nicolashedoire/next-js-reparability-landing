import React, { FC } from "react";
import NextLink from "next/link";

export interface Link {
  href: string;
  text: string;
  isExternal?: boolean;
}

interface FooterLinkListProps {
  links: Link[];
  title: string;
}

const FooterLinkList: FC<FooterLinkListProps> = ({ title, links }) => (
  <section className="w-full mb-5 text-center md:text-left">
    <h4 className="mb-3 text-sm lg:mb-5 text-gray-dark text-bold">{title} </h4>
    <ul className="text-sm text-bold">
      {links.map(({ href, text, isExternal }, i) => (
        <li key={i} className="mb-2">
          {isExternal && (
            <a href={href} target="_blank" rel="noreferrer">
              {text}
            </a>
          )}
          {!isExternal && (
            <NextLink href={href}>
              <a>{text}</a>
            </NextLink>
          )}
        </li>
      ))}
    </ul>
  </section>
);

export default FooterLinkList;
