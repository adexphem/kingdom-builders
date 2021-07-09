import React, { Fragment } from "react";
import styled from "styled-components";
import { up } from "styled-breakpoints";

import { EyeIcon } from "../../../components/icons";

export const FlexWrapper = styled.div`
  display: flex;
`;

const ZoneListing = styled(FlexWrapper)`
  padding: 10px 15px;
  font-size: 0.875rem;
  border-radius: 5px;
  width: 80%;
  margin: 3px auto;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  background-color: rgba(241, 247, 241, 1);
  align-items: center;

  ${up("md")} {
    font-size: 1rem;
  }

  ${up("lg")} {
    font-size: 1.2rem;
  }
`;

const StyledEyeIcon = styled(FlexWrapper)`
  flex: 2 1 0;
  align-items: center;

  svg {
    fill: red;
    height: 14px;
    margin-right: 7px;
  }
`;

const ZoneCount = styled.div`
  padding: 2px 5px;
  font-size: 1rem;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.color.white};
`;

const Index = () => {
  return (
    <Fragment>
      <ZoneListing>
        <StyledEyeIcon>
          <EyeIcon /> Zone 2
        </StyledEyeIcon>
        <ZoneCount>12</ZoneCount>
      </ZoneListing>
    </Fragment>
  );
};

export default React.memo(Index);
