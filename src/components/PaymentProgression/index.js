import React, { Fragment } from "react";
import styled from "styled-components";
import { up } from "styled-breakpoints";

import { TextLink } from "../index";
import { numberWithCommas } from "../../utilities/helpers";

export const SimpleCard = styled.div`
  padding: 6px 12px;
  border-radius: 5px;
  box-shadow: 0px 6px 58px rgba(196, 203, 214, 0.2236);
  background-color: ${({ theme }) => theme.color.white};
  transition: box-shadow 0.8s;
  text-decoration: none;

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  }
`;

const PaymentProgression = styled(SimpleCard)`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 15px;
  width: 100%;
  padding: 20px 30px;

  ${up("md")} {
  }

  ${up("lg")} {
    flex-direction: row;
  }
`;

const StyledDetails = styled.div`
  min-width: 60%;
`;

const Title = styled.label`
  font-family: ${({ theme }) => theme.fonts.primary};
  display: block;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.5rem;
  letter-spacing: 0.0001rem;
`;

const PaymentLabel = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  > label {
    font-size: 2rem;
    line-height: 2rem;

    ${up("lg")} {
      font-size: 2rem;
      line-height: 3.5rem;
    }

    &:nth-of-type(1) {
      font-size: 2rem;

      ${up("lg")} {
        font-size: 2rem;
        line-height: 3.5rem;
      }
    }

    &:nth-of-type(2) {
      padding: 0 10px;
      line-height: 3.5rem;

      ${up("lg")} {
        font-size: 2rem;
        line-height: 3.5rem;
      }
    }

    &:nth-of-type(3) {
      color: ${({ theme }) => theme.color.primary};
      font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    }
  }

  ${up("md")} {
    flex-direction: row;
  }

  ${up("lg")} {
    flex-direction: row;
    margin-bottom: 1px;
  }
`;

const StyledPie = styled.div``;

const index = ({ amount_pledge = "0", amount_paid = "55000" }) => {
  return (
    <PaymentProgression>
      <StyledDetails>
        <Title>Payment Status</Title>
        <PaymentLabel>
          <label>₦{numberWithCommas(amount_paid)}</label>
          <label>of</label>
          <label>₦{numberWithCommas(amount_pledge)}</label>
        </PaymentLabel>
        <TextLink text="Make Payment" showUnderline showArrow />
      </StyledDetails>
      <StyledPie>right</StyledPie>
    </PaymentProgression>
  );
};

export default React.memo(index);
