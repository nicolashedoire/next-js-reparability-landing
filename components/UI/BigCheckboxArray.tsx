/* eslint-disable react/no-array-index-key */
import React, { FC } from "react";

import { Control, Controller } from "react-hook-form";

interface BigCheckboxArrayProps {
  checkboxes: React.ReactElement[];
  name: string;
  control: Control<any>;
}

const BigCheckboxArray: FC<BigCheckboxArrayProps> = ({
  checkboxes,
  name,
  control,
}) => (
  <>
    {checkboxes.map((checkbox, index) => (
      <Controller
        control={control}
        key={index}
        name={`${name}.${index}`}
        defaultValue={false}
        render={({ field: inputProps }) =>
          React.cloneElement(checkbox, {
            inputProps: { ...inputProps },
          })
        }
      />
    ))}
  </>
);

export default BigCheckboxArray;
