import React from "react";

export default function Dnd() {
  return (
    <>
      <div className="flex items-center justify-center w-full mb-10">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-500 border-dashed rounded-lg cursor-pointer"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7em"
              height="7em"
              viewBox="0 0 42 32"
            >
              <path
                fill="#FFA006"
                d="M33.958 12.988C33.531 6.376 28.933 0 20.5 0C12.787 0 6.839 5.733 6.524 13.384C2.304 14.697 0 19.213 0 22.5C0 27.561 4.206 32 9 32h6.5a.5.5 0 0 0 0-1H9c-4.262 0-8-3.972-8-8.5C1 19.449 3.674 14 9 14h1.5a.5.5 0 0 0 0-1H9c-.509 0-.99.057-1.459.139C7.933 7.149 12.486 1 20.5 1C29.088 1 33 7.739 33 14v1.5a.5.5 0 0 0 1 0v-1.509c3.019.331 7 3.571 7 8.509c0 3.826-3.691 8.5-8 8.5h-7.5c-3.238 0-4.5-1.262-4.5-4.5V12.783l4.078 4.07a.5.5 0 1 0 .708-.706l-4.461-4.452c-.594-.592-1.055-.592-1.648 0l-4.461 4.452a.5.5 0 0 0 .707.707L20 12.783V26.5c0 3.804 1.696 5.5 5.5 5.5H33c4.847 0 9-5.224 9-9.5c0-5.167-4.223-9.208-8.042-9.512"
              />
            </svg>
            <p className="mb-2 text-3xl text-slate-600 font-semibold">
              <span>Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-600">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
    </>
  );
}
