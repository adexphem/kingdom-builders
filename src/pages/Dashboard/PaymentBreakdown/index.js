import React, { Fragment } from "react";
import styled from "styled-components";
import { up } from "styled-breakpoints";

const colorMap = {
  part: "#D2EBFC",
  full: "#F1F7F1",
  awaiting: "#FED8E0",
};

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

const StyledShape = styled.div`
  display: block;
  padding: 10px 15px;
  font-size: 1.3rem;
  border-radius: 3px;
  text-align: center;
  background-color: ${({ type }) => colorMap[type]};

  > * {
    display: block;
  }

  ${up("md")} {
    font-size: 1.875rem;
  }

  ${up("lg")} {
    font-size: 2rem;
    min-width: 160px;
  }
`;

const SmallLabel = styled.label`
  font-size: 0.7rem;
`;

const StyledLow = styled(FlexWrapper)`
  width: 100%;
  margin-top: 8px;
  flex-direction: row;
  justify-content: space-around;
`;

const Index = (data) => {
  const breakdown = data.data;

  const fullPayment = breakdown.length > 0 && breakdown.find(({ name }) => name.includes("full"));
  const partPayment = breakdown.length > 0 && breakdown.find(({ name }) => name.includes("part"));
  const awaitingPayment = breakdown.length > 0 && breakdown.find(({ name }) => name.includes("awaiting"));

  return (
    <Fragment>
      <StyledTitle>Payment Breakdown</StyledTitle>
      <StyledContainer>
        <StyledShape type="full">
          <span>{fullPayment && fullPayment.count}</span>
          <SmallLabel>Full Payment</SmallLabel>
        </StyledShape>
        <StyledLow>
          <StyledShape type="part">
            <span>{partPayment && partPayment.count}</span>
            <SmallLabel>Part Payment</SmallLabel>
          </StyledShape>
          <StyledShape type="awaiting">
            <span>{awaitingPayment && awaitingPayment.count}</span>
            <SmallLabel>Awaiting Payment</SmallLabel>
          </StyledShape>
        </StyledLow>
      </StyledContainer>
    </Fragment>
  );
};

export default React.memo(Index);
