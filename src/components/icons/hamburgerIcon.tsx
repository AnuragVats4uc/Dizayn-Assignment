import React from "react";

export const HamburgerIcon = ({onClick}:any) => {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className="cursor-pointer block lg:hidden"
    >
      <path
        d="M7.08337 24.0834H26.9167M7.08337 17.0001H26.9167M7.08337 9.91675H26.9167"
        stroke="black"
        strokeWidth="2.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
