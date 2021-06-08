import React, { FC, useState } from "react";

import clsx from "clsx";
import {
  UseFormRegister,
  DeepMap,
  FieldError,
  RegisterOptions,
} from "react-hook-form";

// import EyeCloseIcon from '../../../assets/eye-close.svg';
// import EyeIcon from '../../../assets/eye.svg';

interface TextInputProps<T = any> {
  id: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  type?: string;
  name: string;
  register: UseFormRegister<T>;
  registerOptions?: RegisterOptions;
  errors: DeepMap<T, FieldError>;
  className?: string;
}

const TextInput: FC<TextInputProps> = ({
  id,
  label,
  placeholder = "",
  defaultValue,
  type: typeProps = "text",
  name,
  register,
  registerOptions,
  errors,
  className = "",
  ...props
}) => {
  const [type, setType] = useState(typeProps);

  return (
    <div className="form-group">
      {label && (
        <label
          htmlFor={id}
          className={clsx("label", { "has-error": errors?.[name] })}
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          type={type}
          defaultValue={defaultValue}
          className={clsx("w-full", className)}
          placeholder={placeholder}
          {...register(name, registerOptions)}
          {...props}
        />
        {typeProps === "password" && (
          <div>
            <button
              type="button"
              className="absolute right-0 transform -translate-x-1/2 -translate-y-1/2 focus:outline-none text-blue-dark top-1/2"
              onClick={() => {
                setType((t) => (t === "text" ? "password" : "text"));
              }}
            >
              {/* {type === 'password' && <EyeIcon />}
							{type === 'text' && <EyeCloseIcon />} */}
            </button>
          </div>
        )}
      </div>

      {errors?.[name] && (
        <span className="pl-1 mt-1 text-red-main text-xxs">
          {errors?.[name]?.type === "required" && "Ce champ est requis."}
          {errors?.[name]?.type === "pattern" && "Le format est invalide."}
          {errors?.[name]?.type === "validate" && errors?.[name]?.message}
        </span>
      )}
    </div>
  );
};

export default TextInput;
