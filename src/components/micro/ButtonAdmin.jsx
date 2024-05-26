import React from "react";

export default function ButtonAdmin({ name, value, type, onClick, onSubmit }) {
  return (
    <>
      <div className="flex justify-center items-center my-10">
        <button
          className="bg-yellow-primary text-white py-2 px-4 rounded-lg"
          name={name}
          type={type}
          onClick={onClick}
          onSubmit={onSubmit}
        >
          {value}
        </button>
      </div>
    </>
  );
}
