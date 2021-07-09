import React from "react";

const RightArrowIcon = ({ fill }) => (
  <svg viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 5H10.1429" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M6.14453 1L10.1445 5L6.14453 9"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default RightArrowIcon;
