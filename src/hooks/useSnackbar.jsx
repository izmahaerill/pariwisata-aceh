import { useState } from "react";

export default function useSnackbar() {
  const [toggle, setToggle] = useState(false);
  const [message, setMessage] = useState(null);
  function showSnackbar(status, msg) {
    setToggle(status);
    setMessage(msg);
  }

  function Snackbar() {
    if (!toggle) return null;
    return (
      <div className="fixed left-0 flex justify-center w-full items-center z-[99999]">
        <div className="bg-slate-400 w-fit mt-5 px-8 py-2 rounded-lg text-gray-600 flex items-center gap-2 ">
          {message}
        </div>
      </div>
    );
  }

  return { showSnackbar, Snackbar };
}
