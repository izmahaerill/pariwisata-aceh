import React from "react";

function IconFilter() {
  return (
    <div>
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        height="1.5em"
        width="1.5em"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M16 6 A2 2 0 0 1 14 8 A2 2 0 0 1 12 6 A2 2 0 0 1 16 6 z" />
        <path d="M4 6h8M16 6h4" />
        <path d="M10 12 A2 2 0 0 1 8 14 A2 2 0 0 1 6 12 A2 2 0 0 1 10 12 z" />
        <path d="M4 12h2M10 12h10" />
        <path d="M19 18 A2 2 0 0 1 17 20 A2 2 0 0 1 15 18 A2 2 0 0 1 19 18 z" />
        <path d="M4 18h11M19 18h1" />
      </svg>
    </div>
  );
}

export default IconFilter;
