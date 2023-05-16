import React from "react";

type Props = {
  onClick: () => void;
};

export const CloseMenuIcon = ({ onClick }: Props) => {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer z-50"
      onClick={onClick}
    >
      <g clipPath="url(#clip0_19_358)">
        <path
          d="M23.5 10.5L10.5 23.5M10.5 10.5L23.5 23.5"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_19_358">
          <rect
            width="14"
            height="14"
            fill="white"
            transform="translate(10 10)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
