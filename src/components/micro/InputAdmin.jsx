import React from "react";

export default function InputAdmin({ type, name, placeholder }) {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="border-2 border-yellow-primary rounded-lg w-full p-2 px-3 text-sm focus:outline-yellow-primary"
      />
    </>
  );
}
