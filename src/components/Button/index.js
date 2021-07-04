import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  height: 41px;
  background: ${({ theme }) => theme.color.btnGreen387833};
  border-radius: 4px;
  padding: 0;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

const ButtonText = styled.span`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.25rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.color.white};
`;

const Button = (props) => {
  return (
    <StyledButton
      name={props.name}
      id={props.buttonId}
      value={props.value}
      disabled={props.disabled === true || props.inactive === true ? "disabled" : ""}
      onClick={props.click_event}
      type={props.type ? props.type : "button"}>
      <ButtonText className="button-text">{props.children || props.button_text}</ButtonText>
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  classes: PropTypes.string,
  buttonId: PropTypes.string,
  button_text: PropTypes.string,
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  click_event: PropTypes.func,
};

export default Button;
