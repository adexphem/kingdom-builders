import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Spinner } from "../";

const StyledButton = styled.button`
  width: 100%;
  height: 41px;
  background: ${({ theme, inProgress }) => (inProgress ? `rgba(56,120,51,.5)` : theme.color.btnGreen387833)};
  border-radius: 4px;
  padding: 0;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

const ButtonText = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: 1rem;
  line-height: 1.25rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.color.white};
`;

const Button = (props) => {
  const { inProgress, inactive, disabled, buttonId, name, value } = props;
  return (
    <StyledButton
      name={name}
      id={buttonId}
      value={value}
      inProgress={inProgress}
      disabled={disabled === true || inactive === true ? "disabled" : ""}
      onClick={props.click_event}
      type={props.type ? props.type : "button"}>
      {!inProgress ? (
        <ButtonText>{props.children || props.button_text}</ButtonText>
      ) : (
        <Spinner color="#fff" size="sm" />
      )}
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  inProgress: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
  classes: PropTypes.string,
  buttonId: PropTypes.string,
  button_text: PropTypes.string,
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  click_event: PropTypes.func,
};

export default Button;
