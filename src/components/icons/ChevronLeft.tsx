import React from "react";
type Props = {
  onClick: () => void;
};

export const ChevronLeft = ({ onClick }: Props) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
      onClick={onClick}
    >
      <path
        d="M13.3463 21.2525L18.5987 16.0001L13.3463 10.7476C12.9558 10.3571 12.9558 9.72395 13.3463 9.33343C13.7368 8.94289 14.37 8.94289 14.7605 9.33343L20.72 15.2929C20.9076 15.4805 21.0129 15.7348 21.0129 16.0001C21.0129 16.2653 20.9076 16.5196 20.72 16.7072L14.7605 22.6668C14.37 23.0572 13.7368 23.0572 13.3463 22.6668C12.9558 22.2763 12.9558 21.6431 13.3463 21.2525Z"
        fill="black"
      />
    </svg>
  );
};
