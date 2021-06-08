import Image from "next/image";
import GooglePlacesAutocomplete from "../../components/GooglePlacesAutocomplete";
import { useRef } from "react";

const Step1 = () => {
  const childRef = useRef<any>();

  return (
    <div className="container pt-40 relative max-w-5xl mx-auto sm:py-36 md:pb-48">
      <div className="flex flex-col px-4 sm:flex-row">
        {/* Left */}
        <div className="relative z-10 w-full md:w-8/12 text-blue-900">
          <div className="w-full sm:w-full md:w-11/12">
            <h1 className="mb-6 text-4xl text-center sm:text-center md:text-left">
              <strong>
                Réparer votre matériel
                <br />
                en toute simplicité.
              </strong>
            </h1>

            <h4 className="w-full mb-6 text-center font-light md:text-left md:w-5/6">
              <strong>La réparation de matériel</strong> à votre service{" "}
              <strong>Dans votre ville</strong>
            </h4>
          </div>

          <div className="flex flex-col items-center mb-4 sm:flex-row">
            {/* <GooglePlacesAutocomplete
              ref={childRef}
              className="w-10/12 mb-4 sm:mb-0 md:w-7/12"
              placeholder="Entrez une adresse"
            /> */}
            <button
              type="button"
              className="w-5/6 sm:w-auto bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-3 px-6 border border-purple-500 hover:border-transparent rounded"
              onClick={() => {}}
            >
              Rechercher
            </button>
          </div>
        </div>

        <div className="hidden sm:hidden md:block md:relative md:top-0 md:-right-0">
          <Image
            width={400}
            height={362}
            src={`/images/index/header.png`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Step1;
