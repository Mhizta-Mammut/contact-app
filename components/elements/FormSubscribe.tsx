import React from "react";
import InputText from "./InputText";

interface Props {
  label: string;
  placeholder: string;
}

const FormSubscribe = ({ label, placeholder }: Props) => {
  return (
    <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
      <InputText placeholder={placeholder} id={`"form-subscribe-${label}`} />
      <button
        className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
        type="submit"
      >
        {label}
      </button>
    </form>
  );
};
export default FormSubscribe;
