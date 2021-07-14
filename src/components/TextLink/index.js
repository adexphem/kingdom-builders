import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { RightArrowIcon } from "../../components/icons";

const StyledLink = styled.div`
  display: flex;
  align-items: center;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.color.btnGreen1A5C16};
  font-size: 0.875rem;
  text-decoration: ${({ hasLine }) => (hasLine ? "underline" : "")};
  cursor: pointer;
`;

const StyledArrow = styled.div`
  svg {
    height: 10px;
    fill: ${({ theme }) => theme.color.btnGreen1A5C16};
  }
`;

const TextLink = (props) => {
  const { onClick, text, showUnderline = false, showArrow = false } = props;

  return (
    <StyledLink onClick={onClick} hasLine={showUnderline}>
      <span>{text}</span>
      {showArrow && (
        <StyledArrow>
          <RightArrowIcon />
        </StyledArrow>
      )}
    </StyledLink>
  );
};

TextLink.propTypes = {
  showUnderline: PropTypes.bool,
  showArrow: PropTypes.bool,
  text: PropTypes.string,
};

export default React.memo(TextLink);
