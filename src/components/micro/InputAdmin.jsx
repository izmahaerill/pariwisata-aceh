import React from "react";

export default function InputAdmin({ type, name, placeholder, defaultValue }) {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue || ""}
        className="border-2 border-yellow-primary rounded-lg w-full p-2 px-3 text-sm focus:outline-yellow-primary"
      />
    </>
  );
}
