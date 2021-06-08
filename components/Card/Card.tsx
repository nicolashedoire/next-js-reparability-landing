import React, { FC } from "react";
import { CardProps } from "./types";
import clsx from "clsx";
import Image from "next/image";

const Card: FC<CardProps> = ({
  title,
  subtitle,
  imageUrl,
  imageWidth,
  imageHeight,
  imageAlt,
  lg,
}) => (
  <div className="container p-4">
    <div
      className={clsx("py-4 flex justify-center", {
        "md:justify-start": lg !== "center",
      })}
      style={{ minHeight: 50 }}
    >
      <Image
        width={imageWidth}
        height={imageHeight}
        src={imageUrl}
        alt={imageAlt}
        title={imageAlt}
      />
    </div>

    <h4
      className={clsx("mb-1 text-lg font-bold text-blue-800 text-center", {
        "md:text-left": lg !== "center",
      })}
    >
      {title}
    </h4>
    <p
      className={clsx("text-sm text-gray-600 text-center", {
        "md:text-left": lg !== "center",
      })}
    >
      {subtitle}
    </p>
  </div>
);

export default Card;
