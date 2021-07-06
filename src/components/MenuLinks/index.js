import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { linkIcons } from "./constants";

const StyledContainer = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;

  &:hover {
    cursor: pointer;
  }
`;

const StyledCTA = styled.div`
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme, isActive }) => (isActive ? `rgba(26, 92, 22, 1)` : theme.color.linkGrey)};
  font-size: ${({ theme }) => theme.toRem("16px")};
  background-color: ${({ isActive }) => (isActive ? `rgba(26, 92, 22, 0.3)` : ``)};
  padding: 8px 10px;
  width: 80%;
  transition: background 1s;
  -webkit-transition: background 1s;
  border-radius: 5px;

  &:hover {
    color: ${({ theme }) => theme.color.black};
    background-color: rgba(26, 92, 22, 0.3);
  }
`;

const StyledIcon = styled.div`
  padding-right: 15px;
  display: flex;
  align-items: center;

  svg {
    height: 24px;
    fill: ${({ theme, isActive }) => (isActive ? theme.color.btnGreen1A5C16 : theme.color.linkGrey)};
  }
`;

const StyledBar = styled.div`
  background: ${({ isActive }) => (isActive ? `rgba(26, 92, 22, 0.7)` : `rgba(26, 92, 22, 0.1)`)};
  border-radius: 2px 0px 0px 2px;
  width: 5px;
  height: 44px;
`;

const MenuLinks = (props) => {
  const { title, isActive, onClick, icon } = props;

  return (
    <StyledContainer onClick={() => onClick(title)}>
      <StyledCTA isActive={isActive}>
        <StyledIcon isActive={isActive}>{linkIcons[`${icon}`]}</StyledIcon>
        {title}
      </StyledCTA>

      <StyledBar isActive={isActive} />
    </StyledContainer>
  );
};

MenuLinks.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
  classes: PropTypes.string,
  buttonId: PropTypes.string,
  button_text: PropTypes.string,
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
};

export default MenuLinks;
