import React from "react";
import styled, { keyframes } from "styled-components";

const sizeMap = {
  sm: "18px",
  md: "25px",
};

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;

const StyledSpinner = styled.svg`
  animation: ${rotate} 2s linear infinite;
  width: ${({ size }) => sizeMap[size]};
  height: ${({ size }) => sizeMap[size]};
`;

const StyledCircle = styled.circle`
  fill: none;
  stroke: ${({ color }) => color};
  stroke-linecap: round;
  stroke-width: 4;
  animation: ${dash} 1.5s ease-in-out infinite;
`;

const Spinner = (props) => (
  <StyledSpinner viewBox="0 0 50 50" size={props.size}>
    <StyledCircle cx="25" cy="25" r="20" color={props.color}></StyledCircle>
  </StyledSpinner>
);

export default Spinner;
