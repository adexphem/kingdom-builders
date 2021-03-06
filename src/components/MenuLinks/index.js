import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { up } from "styled-breakpoints";

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
  flex-direction: column;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme, isActive }) => (isActive ? `rgba(26, 92, 22, 1)` : theme.color.linkGrey)};
  font-size: ${({ theme }) => theme.toRem("16px")};
  background-color: ${({ isActive }) => (isActive ? `rgba(26, 92, 22, 0.3)` : ``)};
  padding: 5px 10px;
  width: 85%;
  transition: background 1s;
  -webkit-transition: background 1s;
  border-radius: 3px;

  &:hover {
    color: ${({ theme }) => theme.color.black};
    background-color: rgba(26, 92, 22, 0.3);
  }

  ${up("lg")} {
    flex-direction: row;
    padding: 8px 10px;
    border-radius: 5px;
  }
`;

const StyledIcon = styled.div`
  padding-right: 0;
  display: flex;
  align-items: center;

  svg {
    display: block;
    height: 18px;
    fill: ${({ theme, isActive }) => (isActive ? theme.color.btnGreen1A5C16 : theme.color.linkGrey)};

    ${up("md")} {
      height: 20px;
    }

    ${up("lg")} {
      padding-right: 15px;
      height: 24px;
    }
  }
`;

const StyledBar = styled.div`
  background: ${({ isActive }) => (isActive ? `rgba(26, 92, 22, 0.7)` : `rgba(26, 92, 22, 0.1)`)};
  border-radius: 5px 0px 0px 5px;
  width: 5px;
  height: 40px;
`;

const StyledTitle = styled.span`
  text-align: center;
  font-size: 0.875rem;

  ${up("md")} {
    font-size: 1rem;
  }

  ${up("lg")} {
    font-size: 1rem;
    text-align: left;
  }
`;

const MenuLinks = (props) => {
  const { title, isActive, onClick, icon } = props;

  return (
    <StyledContainer onClick={() => onClick(title)}>
      <StyledCTA isActive={isActive}>
        <StyledIcon isActive={isActive}>{linkIcons[`${icon}`]}</StyledIcon>
        <StyledTitle>{title}</StyledTitle>
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

export default React.memo(MenuLinks);
