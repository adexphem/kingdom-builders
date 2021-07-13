import React, { Fragment } from "react";
import styled from "styled-components";
import { up } from "styled-breakpoints";

export const FlexWrapper = styled.div`
  display: flex;
`;

const StyledContainer = styled(FlexWrapper)`
  padding: 5px;
  font-size: 0.875rem;
  border-radius: 5px;
  width: 90%;
  margin: 3px auto;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  align-items: center;
  flex-direction: column;

  ${up("md")} {
    font-size: 1rem;
  }

  ${up("lg")} {
    font-size: 1.2rem;
    flex-direction: column;
  }
`;

const StyledTitle = styled.div`
  text-align: center;
  font-size: 1.2rem;
  padding-bottom: 10px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};

  ${up("md")} {
    font-size: 1.875rem;
  }

  ${up("lg")} {
    font-size: 2rem;
  }
`;

const StyledFull = styled.div`
  display: block;
`;

const StyledLow = styled(FlexWrapper)`
  flex-direction: row;
`;

const Index = () => {
  return (
    <Fragment>
      <StyledTitle>Payment Breakdown</StyledTitle>
      <StyledContainer>
        <StyledFull>a</StyledFull>
        <StyledLow>
          <div>c</div>
          <div>d</div>
        </StyledLow>
      </StyledContainer>
    </Fragment>
  );
};

export default React.memo(Index);
