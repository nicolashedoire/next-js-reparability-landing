/* eslint-disable prefer-destructuring */

import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

import Geocode from "react-geocode";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";


// Reverse geocoding config :
Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
Geocode.setLanguage("fr");
Geocode.setRegion("fr");

interface CustomGooglePlacesAutocompleteProps {
  className?: string;
  placeholder?: string;
  onAfterChange?: (address: string) => void;
}

const CustomGooglePlacesAutocomplete = (
  {
    className = "",
    placeholder = "Entrez une adresse",
    onAfterChange,
  }: CustomGooglePlacesAutocompleteProps,
  ref: any
) => {
  // store userAddress on local storage, and set as default input if one is already stocked

  // used for google place autocomplete
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState("");

  const onChange = async (e: any) => {
    if (!e.value) return;
    setInputValue("");
    setValue(e);
    if (onAfterChange && typeof onAfterChange === "function")
      onAfterChange(e.value.description);
  };

  const onInputChange = (newValue: string, { action }: { action: string }) => {
    switch (action) {
      case "input-change":
        setInputValue(newValue);
        break;
      default:
        break;
    }
  };

  return (
    <GooglePlacesAutocomplete
      autocompletionRequest={{
        componentRestrictions: {
          country: ["fr"],
        },
      }}
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      selectProps={{
        defaultInputValue: inputValue,
        inputValue,
        onInputChange,
        value,
        onChange,
        noOptionsMessage: () => null,
        loadingMessage: () => "Chargement...",
        className,
        placeholder,
        styles: {
          placeholder: (base: React.CSSProperties) => ({
            ...base,
            color: "#B7B7B7",
            fontSize: "0.875rem",
          }),
          control: (base: React.CSSProperties) => ({
            ...base,
            display: "flex",
            borderColor: "#B7B7B7",
            borderWidth: 1,
            borderRadius: 5,
            cursor: "text",
            paddingTop: 2,
            paddingBottom: 2,
            height: "48px",
          }),
          container: (base: React.CSSProperties) => ({ ...base }),
          input: (base: React.CSSProperties) => ({ ...base }),
          indicatorsContainer: (base: React.CSSProperties) => ({
            ...base,
            cursor: "pointer",
            display: "none",
          }),

          option: (base: React.CSSProperties) => ({
            ...base,
          }),
        },
      }}
    />
  );
};

export default forwardRef<any, CustomGooglePlacesAutocompleteProps>(
  CustomGooglePlacesAutocomplete
);
