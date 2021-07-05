import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledLink = styled.div``;

const TextLink = (props) => {
  return (
    <StyledLink onClick={props.onClick}>
      <span>{props.text}</span>
    </StyledLink>
  );
};

TextLink.propTypes = {
  showUnderline: PropTypes.bool,
  text: PropTypes.string,
};

export default TextLink;
