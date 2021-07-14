import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.white};
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TypeA = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default TypeA;
