import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import NumberFormat from "react-number-format";

// font-family: ${({ theme }) => theme.fonts.primary};

const StyledInput = styled.input`
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.linkGrey};
  border-radius: to-rem(4px);
  box-shadow: none;
  box-sizing: border-box;
  display: block;
  line-height: ${({ theme }) => theme.toRem(20)};
  margin: 0 auto;
  outline: none;
  padding: ${({ theme }) => theme.toRem(20)} ${({ theme }) => theme.toRem(16)};
  transition: 0.3s;
  width: 100%;

  &:read-only {
    cursor: not-allowed;
  }
`;

const Input = (props) => {
  const { label, required } = props;

  return (
    <label className={`input__group ${props.amountField || props.phoneField ? "has-append" : ""}`}>
      {label == null ? (
        ""
      ) : (
        <span className={"input__label"}>
          {label}
          {required ? <span className="input__label-required">*</span> : ""}
        </span>
      )}

      <div className="input-holder">
        {props.amountField && <span className="append">NGN</span>}
        {props.phoneField && <span className="append">+234</span>}

        {props.amountField || props.numberField || props.phoneField ? (
          <NumberFormat
            thousandSeparator={props.amountField}
            allowLeadingZeros={props.numberField || props.phoneField}
            type="tel"
            allowNegative={false}
            autoComplete={props.autoComplete}
            autoFocus={props.autoFocus}
            className={`input ${props.classes == null ? "" : props.classes}`}
            defaultValue={props.defaultValue}
            disabled={props.disabled ? "disabled" : ""}
            min={props.min}
            max={props.max}
            minLength={props.minlength}
            maxLength={props.maxlength}
            name={props.name}
            onBlur={props.onBlur}
            onKeyUp={props.onKeyUp}
            onKeyDown={props.onKeyDown}
            onKeyPress={props.onKeyPress}
            onChange={props.onChange}
            placeholder={props.placeholder}
            readOnly={props.readOnly}
            value={props.value}
            required={props.required}
          />
        ) : (
          <StyledInput
            autoComplete={props.autoComplete}
            autoFocus={props.autoFocus}
            className={`input ${props.classes == null ? "" : props.classes}`}
            defaultValue={props.defaultValue}
            disabled={props.disabled ? "disabled" : ""}
            min={props.min}
            max={props.max}
            minLength={props.minlength}
            maxLength={props.maxlength}
            name={props.name}
            onBlur={props.onBlur}
            onKeyUp={props.onKeyUp}
            onKeyDown={props.onKeyDown}
            onKeyPress={props.onKeyPress}
            onChange={props.onChange}
            placeholder={props.placeholder}
            readOnly={props.readOnly}
            type={props.type == null ? "text" : props.type}
            value={props.value}
          />
        )}
      </div>
      {props.errorMessage && <span className={"input__error"}>{props.errorMessage}</span>}
    </label>
  );
};

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
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onKeyUp: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyPress: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  type: PropTypes.string,
  value: PropTypes.any,
};

export default Input;
