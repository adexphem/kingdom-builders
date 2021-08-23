import React from "react";

import { StyledContainer, StyledH2, StyledAmount } from "./AmountCardSm.styles";
import { numberWithCommas } from "../../utilities/helpers";

const AmountCardSm = ({ title, amount }) => {
  return (
    <StyledContainer>
      <StyledH2>{title}</StyledH2>
      <StyledAmount>{numberWithCommas(amount)}</StyledAmount>
    </StyledContainer>
  );
};

export default React.memo(AmountCardSm);
