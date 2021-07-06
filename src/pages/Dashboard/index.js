import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const Index = () => {
  return <MainContainer>Dashboard</MainContainer>;
};

export default Index;
