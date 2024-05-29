import React from "react";

export default function TextareaAdmin({ name, id, placeholder, defaultValue }) {
  return (
    <>
      <textarea
        name={name}
        placeholder={placeholder}
        id={id}
        defaultValue={defaultValue || ""}
        className="border-2 border-yellow-primary rounded-lg w-full p-2 px-3 text-sm h-52 focus:outline-yellow-primary"
      ></textarea>
    </>
  );
}
