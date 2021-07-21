import React from "react";
import styled from "styled-components";

import { StyledCol, ColTitle, ColBody } from "./styles";

const Wrapper = styled.div`
  display: flex;
`;

export const SmEmpty = () => (
  <Wrapper>
    <StyledCol hidden serialNo>
      <ColTitle>SN</ColTitle>
      <ColBody></ColBody>
    </StyledCol>
    <StyledCol fixedName>
      <ColTitle>Added On</ColTitle>
      <ColBody></ColBody>
    </StyledCol>
    <StyledCol fixedName>
      <ColTitle>Amount Paid</ColTitle>
      <ColBody></ColBody>
    </StyledCol>
    <StyledCol fixedName hidden>
      <ColTitle>Entered by</ColTitle>
      <ColBody></ColBody>
    </StyledCol>
  </Wrapper>
);
