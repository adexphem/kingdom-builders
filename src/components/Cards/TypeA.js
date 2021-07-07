import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  padding: 10px;
`;

const TypeA = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default TypeA;
