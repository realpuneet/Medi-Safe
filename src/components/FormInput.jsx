import React from "react";

const FormInput = ({ label, register, name, ...props }) => (
  <input
    className="w-full px-2 py-1 border-b outline-0 rounded"
    placeholder={label}
    {...register(name)}
    {...props}
  />
);

export default FormInput;