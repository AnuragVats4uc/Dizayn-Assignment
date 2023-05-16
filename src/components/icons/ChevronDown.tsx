import React from "react";

type Props = {
  onClick: () => void;
};

export const ChevronDown = ({ onClick }: Props) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer hidden lg:block"
      onClick={onClick}
    >
      <path
        d="M10.7475 13.3476L15.9999 18.6L21.2524 13.3476C21.6429 12.9571 22.2761 12.9571 22.6666 13.3476C23.0571 13.7381 23.0571 14.3713 22.6666 14.7618L16.7071 20.7213C16.5195 20.9089 16.2652 21.0142 15.9999 21.0142C15.7347 21.0142 15.4804 20.9089 15.2928 20.7213L9.3332 14.7618C8.9428 14.3713 8.9428 13.7381 9.3332 13.3476C9.72373 12.9571 10.3569 12.9571 10.7475 13.3476Z"
        fill="black"
      />
    </svg>
  );
};
