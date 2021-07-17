import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { EyeIcon } from "../icons";

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.toRem("10px")} ${({ theme }) => theme.toRem("15px")};
`;

const StyledInput = styled.input`
  margin: 0 auto;
  outline: none;
  transition: 0.3s;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  font-size: 1rem;
  box-sizing: border-box;
  padding: ${({ hasEye }) => (hasEye ? "10px 45px 10px 13px" : "10px 16px")};
  font-family: ${({ theme }) => theme.fonts.primary};
  background: ${({ theme }) => theme.color.white};
  border: 1px solid
    ${({ theme, error, name }) => (error && error[`${name}`] ? "rgba(162, 75, 59, .6)" : theme.color.borderStroke)};
  box-shadow: 0px 1px 2px rgba(184, 200, 224, 0.222055);
  color: ${({ theme }) => theme.color.titleGrey};

  &:read-only {
    cursor: not-allowed;
  }
`;

const StyledLabel = styled.span`
  font-size: 0.875rem;
  line-height: 1.2rem;
  padding: ${({ theme }) => theme.toRem("10px")} ${({ theme }) => theme.toRem("18px")};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

const RequiredAsterik = styled.span`
  color: ${({ theme }) => theme.color.warning};
`;

const StyledEye = styled.div`
  width: 0;
  height: 15px;
  right: 38px;
  position: relative;

  svg {
    height: 15px;

    &:hover {
      cursor: pointer;
    }
  }
`;

const StyledError = styled.div`
  color: rgba(162, 75, 59, 0.9);
  font-size: 0.75rem;
  padding: 0 20px;
  margin-bottom: 20px;
  margin-top: -5px;
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const Input = React.forwardRef((props, ref) => {
  const { name, label, required, hasEye, error } = props;

  return (
    <label>
      {label && (
        <StyledLabel>
          {label}
          {required ? <RequiredAsterik>*</RequiredAsterik> : ""}
        </StyledLabel>
      )}

      <InputContainer>
        <StyledInput
          autoComplete={props.autoComplete}
          autoFocus={props.autoFocus}
          defaultValue={props.defaultValue}
          disabled={props.disabled ? "disabled" : ""}
          min={props.min}
          max={props.max}
          minLength={props.minlength}
          maxLength={props.maxlength}
          ref={ref}
          name={name}
          onBlur={props.onBlur}
          onKeyUp={props.onKeyUp}
          onKeyDown={props.onKeyDown}
          onKeyPress={props.onKeyPress}
          onChange={props.onChange}
          placeholder={props.placeholder}
          readOnly={props.readOnly}
          type={props.type == null ? "text" : props.type}
          value={props.value}
          hasEye={hasEye}
          error={error}
        />

        {hasEye && (
          <StyledEye>
            <EyeIcon fill="#387833" />
          </StyledEye>
        )}
      </InputContainer>
      {error && error[`${name}`] && <StyledError>{error[`${name}`].message}</StyledError>}
    </label>
  );
});

Input.propTypes = {
  amountField: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  numberField: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  classes: PropTypes.string,
  defaultValue: PropTypes.any,
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  min: PropTypes.number,
  max: PropTypes.number,
  minlength: PropTypes.number,
  maxlength: PropTypes.number,
  phoneField: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  label: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onKeyUp: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyPress: PropTypes.func,
  onChange: PropTypes.func,
  error: PropTypes.any,
  ref: PropTypes.any,
  placeholder: PropTypes.string,
  readOnly: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  type: PropTypes.string,
  value: PropTypes.any,
  hasEye: PropTypes.bool,
};

export default Input;
