/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC, useEffect, useState } from "react";

import clsx from "clsx";
import Image from "next/image";
import { ControllerRenderProps } from "react-hook-form";

interface BigCheckboxProps {
  title: string;
  subtitle?: React.ReactNode;
  label?: React.ReactNode;
  value: string;
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageContainerMinHeight?: number;
  imageAlt?: string;
  inputProps?: ControllerRenderProps<any, any>;
}

const BigCheckbox: FC<BigCheckboxProps> = ({
  title,
  subtitle,
  label,
  value,
  imageUrl,
  imageHeight,
  imageContainerMinHeight = 125,
  imageWidth,
  imageAlt,
  inputProps,
}) => {
  const [checked, setChecked] = useState(!!inputProps?.value);
  const [changed, setChanged] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.currentTarget.checked);
    setChanged(true);
  };

  useEffect(() => {
    if (changed) {
      inputProps?.onChange(checked ? value : false);
    }
  }, [inputProps, value, checked, changed]);

  return (
    <label className="text-blue-midnight">
      <div
        className={clsx(
          "bg-gray-ultraLight border-2 rounded px-2 py-5 text-center transition-all transform hover:scale-105",
          {
            "border-gray-ultraLight": !checked,
            "border-blue-dark": checked,
          }
        )}
      >
        <h2
          className={clsx("text-2xl text-blue-midnight", {
            "mb-8": !imageUrl,
            "mb-0.5": imageUrl,
          })}
        >
          <strong>{title}</strong>
        </h2>
        {subtitle && <p className="text-xs h-9">{subtitle}</p>}
        {imageUrl && imageWidth && imageHeight && (
          <div
            className="text-center pointer-events-none select-none"
            style={{ minHeight: imageContainerMinHeight }}
          >
            <Image
              src={imageUrl}
              width={imageWidth}
              height={imageHeight}
              alt={imageAlt}
            />
          </div>
        )}
        <div>
          <input
            type="checkbox"
            checked={checked}
            value={value}
            {...inputProps}
            onChange={onChange}
          />
        </div>
      </div>
      {label && <p className="mt-4 text-sm text-center">{label}</p>}
    </label>
  );
};

export default BigCheckbox;
