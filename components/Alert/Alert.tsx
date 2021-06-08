import React, { FC } from "react";

import clsx from "clsx";

export interface AlertProps {
  type: "success" | "error" | "warning";
  title: string;
  message: string;
  className?: string;
}

const Alert: FC<AlertProps> = ({ type, title, message, className = "" }) => (
  <div
    className={clsx(
      "p-4 border-l-4 rounded-lg",
      {
        "bg-green-ultraLight border-green-main text-green-main":
          type === "success",
        "bg-red-ultraLight border-red-main text-red-main": type === "error",
        "bg-orange-ultraLight border-orange-main text-orange-main":
          type === "warning",
      },
      className
    )}
    role="alert"
  >
    <p className="font-bold">{title}</p>
    <p>{message}</p>
  </div>
);

export default Alert;
