import React from "react";
import styled from "styled-components";
import { up } from "styled-breakpoints";

import { TypeACard } from "../../components/";
import { TextLink } from "../../components/";

import ZoneListing from "./ZonalViews";

export const FlexWrapper = styled.div`
  display: flex;
`;

const MainContainer = styled(FlexWrapper)`
  width: auto;
  padding: 15px 20px;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const StyledBreakdown = styled(FlexWrapper)`
  flex-direction: column;
  margin-bottom: 25px;
  justify-content: space-between;
  flex-basis: 30%;

  ${up("md")} {
    flex-direction: row;
  }

  ${up("lg")} {
    flex-direction: row;
  }
`;

const StyledKBuilders = styled.div`
  flex: 1 1 0;
  height: 230px;
`;

const StyledKZones = styled.div`
  flex: 1 1 0;
`;

const BreakdownChart = styled.div`
  flex: 2 1 0;
  margin: 0 40px;
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

const CountDisplay = styled.div`
  padding: 15px 20px;
  font-size: 1.2rem;
  border-radius: 5px;
  text-align: center;
  width: 80%;
  margin: 0 auto;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  background-color: rgba(241, 247, 241, 1);

  ${up("md")} {
    font-size: 1.875rem;
  }

  ${up("lg")} {
    font-size: 3rem;
  }
`;

const StyledChartContainer = styled.div`
  margin-top: 20px;
`;

const StyledTextLink = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;

const Index = () => {
  return (
    <MainContainer>
      <StyledBreakdown>
        <StyledKBuilders>
          <TypeACard>
            <CountTitle>
              Kingdom <br /> Builders
            </CountTitle>
            <CountDisplay>1,800</CountDisplay>
          </TypeACard>
        </StyledKBuilders>

        <BreakdownChart>
          <TypeACard>
            <div>Payment Breakdown</div>
          </TypeACard>
        </BreakdownChart>

        <StyledKZones>
          <TypeACard>
            <CountTitle>Zonal Views</CountTitle>
            <ZoneListing />
            <StyledTextLink>
              <TextLink text="See all" showUnderline showArrow />
            </StyledTextLink>
          </TypeACard>
        </StyledKZones>
      </StyledBreakdown>
      <StyledChartContainer>
        <TypeACard>Payment Distribution</TypeACard>
      </StyledChartContainer>
    </MainContainer>
  );
};

export default Index;
