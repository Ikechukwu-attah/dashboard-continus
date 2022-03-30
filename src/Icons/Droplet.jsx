import React from "react";

const Droplet = ({ color = "#5899DA" }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="31" cy="31" r="31" fill={color} fill-opacity="0.3" />
      <path
        d="M30.5 17.9229L38.7541 26.1771C40.3865 27.8084 41.4984 29.8872 41.9492 32.1505C42.4 34.4138 42.1694 36.76 41.2866 38.8922C40.4038 41.0245 38.9084 42.847 36.9897 44.1293C35.071 45.4116 32.815 46.096 30.5072 46.096C28.1995 46.096 25.9435 45.4116 24.0248 44.1293C22.1061 42.847 20.6107 41.0245 19.7279 38.8922C18.8451 36.76 18.6145 34.4138 19.0653 32.1505C19.5161 29.8872 20.628 27.8084 22.2604 26.1771L30.5 17.9229Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Droplet;
