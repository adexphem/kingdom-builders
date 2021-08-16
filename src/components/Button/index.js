import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { Spinner } from "../";
import EmailIcon from "../icons/EmailIcon";

const StyledButton = styled.button`
  width: 100%;
  height: 41px;
  border-radius: 4px;
  padding: 0;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ inProgress, type }) =>
    (inProgress &&
      css`
        background: "rgba(56,120,51,.5)";
      `) ||
    (type === "email" &&
      css`
        background: ${({ theme }) => theme.color.btnGreen9CD6A4};
      `) ||
    css`
      background: ${({ theme }) => theme.color.btnGreen387833};
    `}

  &:hover {
    cursor: pointer;
  }

  svg {
    height: 14px;
    fill: ${({ theme }) => theme.color.white};
    margin-right: 3px;

    ${({ type }) =>
      (type === "email" &&
        css`
          fill: ${({ theme }) => theme.color.color1E411B};
        `) ||
      css`
        fill: ${({ theme }) => theme.color.white};
      `}
  }
`;

const ButtonText = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: 1rem;
  line-height: 1.25rem;
  font-family: ${({ theme }) => theme.fonts.primary};

  ${({ type }) =>
    (type === "email" &&
      css`
        color: ${({ theme }) => theme.color.color1E411B};
      `) ||
    css`
      color: ${({ theme }) => theme.color.white};
    `}
`;

const iconComp = {
  email: <EmailIcon />,
};

const Button = (props) => {
  const { inProgress, inactive, disabled, buttonId, name, value, icon, type, onClick } = props;

  return (
    <StyledButton
      name={name}
      id={buttonId}
      value={value}
      inProgress={inProgress}
      disabled={disabled === true || inactive === true ? "disabled" : ""}
      onClick={onClick}
      type={type ? type : "button"}>
      {!inProgress ? (
        <Fragment>
          {icon ? iconComp[`${icon}`] : ""}
          <ButtonText type={type ? type : "button"}>{props.children || props.button_text}</ButtonText>
        </Fragment>
      ) : (
        <Spinner color="#fff" size="sm" />
      )}
    </StyledButton>
  );
};

Button.propTypes = {
  inProgress: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
  classes: PropTypes.string,
  buttonId: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  click_event: PropTypes.func,
};

export default Button;
