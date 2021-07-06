import React from "react";
import styled from "styled-components";
import { up } from "styled-breakpoints";

import { LogoutIcon } from "../../../components/icons";

const StyledLogoutIcon = styled.div`
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.toRem("16px")};
  font-family: ${({ theme }) => theme.fonts.primary};

  svg {
    height: 20px;
    padding-right: 5px;
  }

  &:hover {
    cursor: pointer;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }
`;

const StyledLabel = styled.label`
  display: none;

  ${up("lg")} {
    display: flex;
  }
`;

const index = ({ onClick }) => {
  return (
    <StyledLogoutIcon onClick={onClick}>
      <LogoutIcon fill="#0A1629" />
      <StyledLabel>Logout</StyledLabel>
    </StyledLogoutIcon>
  );
};

export default index;
