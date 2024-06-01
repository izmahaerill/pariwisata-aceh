import React from "react";

export default function InputAdmin({
  type,
  name,
  placeholder,
  defaultValue,
  min,
}) {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue || ""}
        min={min}
        required
        className="border-2 border-yellow-primary rounded-lg w-full p-2 px-3 text-sm focus:outline-yellow-primary"
      />
    </>
  );
}
