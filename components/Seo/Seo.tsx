import React, { FC } from "react";
import { NextSeo } from "next-seo";

interface MetaProps {
  title: string;
  description: string;
  canonical?: string;
}

const Seo: FC<MetaProps> = (props) => (
  <NextSeo
    title={props.title}
    titleTemplate="Repair - %s"
    defaultTitle="La transparence sur votre matériel"
    // description={props.description}
    description="Réparer votre matériel en toute simplicité"
    canonical={props.canonical}
    openGraph={{
      title: props.title,
      // description: props.description,
      description: "Réparer votre matériel en toute simplicité",
      url: props.canonical,
      locale: "fr",
      site_name: "Repair",
    }}
    noindex={process.env.NEXT_PUBLIC_ENV !== "prod"}
    nofollow={process.env.NEXT_PUBLIC_ENV !== "prod"}
  />
);

export default Seo;
