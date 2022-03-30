import React from "react";

const Cloud = ({ color = "#E8743B" }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="31" cy="31" r="31" fill={color} fill-opacity="0.3" />
      <g clip-path="url(#clip0_743_704)">
        <path
          d="M42.2241 27.5614L44.4584 25.6866"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M35.5212 33.1858L37.7555 31.311"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M34.7251 18.6242L36.9594 16.7494"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28.0222 24.2486L30.2565 22.3738"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40.709 21.218L42.9433 19.3432"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M34.0061 26.8424L36.2404 24.9676"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28.2719 16.4241C26.7721 15.6813 25.0624 15.477 23.4299 15.8456C21.7973 16.2142 20.3412 17.1331 19.306 18.4483C18.2709 19.7634 17.7196 21.3946 17.7448 23.068C17.77 24.7415 18.3701 26.3553 19.4444 27.6387L20.6255 29.0463C19.5514 30.551 18.8502 32.2895 18.5799 34.1185C18.3095 35.9474 18.4777 37.8144 19.0705 39.5655C19.6633 41.3167 20.6638 42.9019 21.9896 44.1905C23.3153 45.4791 24.9283 46.4342 26.6956 46.977C28.463 47.5198 30.334 47.6349 32.1545 47.3126C33.975 46.9904 35.6928 46.2401 37.1665 45.1237C38.6401 44.0072 39.8273 42.5565 40.6302 40.8912C41.4331 39.2258 41.8287 37.3935 41.7844 35.5452"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_743_704">
          <rect
            width="35"
            height="35"
            fill="white"
            transform="translate(28.4976 54.3091) rotate(-130)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Cloud;
