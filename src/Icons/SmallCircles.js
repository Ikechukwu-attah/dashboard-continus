import React from "react";

const SmallCircles = ({ color = "#606060" }) => {
  return (
    <svg
      width="34"
      height="10"
      viewBox="0 0 34 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
    >
      <circle cx="5" cy="5" r="5" fill="#027351" fillOpacity="0.5" />
      <circle cx="17" cy="5" r="5" fill="#027351" fillOpacity="0.5" />
      <circle cx="29" cy="5" r="5" fill="#027351" fillOpacity="0.5" />
    </svg>
  );
};

export default SmallCircles;
