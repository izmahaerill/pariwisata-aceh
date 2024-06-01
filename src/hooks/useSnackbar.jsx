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
        <div className="bg-yellow-primary w-fit mt-5 px-8 py-2 rounded-md text-white flex items-center gap-2 ">
          {message}
        </div>
      </div>
    );
  }

  return { showSnackbar, Snackbar };
}
