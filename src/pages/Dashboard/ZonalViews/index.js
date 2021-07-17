import React, { Fragment } from "react";
import styled from "styled-components";
import { up } from "styled-breakpoints";

import { EyeIcon } from "../../../components/icons";
import { unstable_concurrentAct } from "react-dom/test-utils";

export const FlexWrapper = styled.div`
  display: flex;
  box-sizing: initial;
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

const CountTitle = styled.div`
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

const StyledEyeIcon = styled(FlexWrapper)`
  flex: 2 1 0;
  align-items: center;
  font-size: 1rem;

  svg {
    fill: rgba(71, 81, 31, 0.7);
    height: 14px;
    margin-right: 7px;
  }
`;

const ZoneCount = styled.div`
  padding: 2px 5px;
  font-size: 1rem;
  border-radius: 3px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  background-color: ${({ theme }) => theme.color.white};
`;

const expectedZones = ["zone 1", "zone 2", "zone 3"];

const Index = (data) => {
  const zoneRows = data.data;
  const filteredZoneRows =
    (zoneRows && zoneRows.length > 0 && zoneRows.filter(({ name }) => expectedZones.includes(name))) || [];

  return (
    <Fragment>
      <CountTitle>Zonal Views</CountTitle>
      {filteredZoneRows.map(({ name, count }, id) => (
        <ZoneListing key={id}>
          <StyledEyeIcon>
            <EyeIcon /> {name}
          </StyledEyeIcon>
          <ZoneCount>{count}</ZoneCount>
        </ZoneListing>
      ))}
    </Fragment>
  );
};

export default React.memo(Index);
