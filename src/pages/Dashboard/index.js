import React from "react";
import styled from "styled-components";
import { up } from "styled-breakpoints";

import { TypeACard } from "../../components/";

const MainContainer = styled.div`
  width: auto;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const StyledBreakdown = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  justify-content: space-between;
  flex-basis: 30%;

  ${up("lg")} {
    flex-direction: row;
  }
`;

const StyledKBuilders = styled.div`
  max-width: 250px;
`;

const BreakdownChart = styled.div`
  max-width: 400px;
`;

const StyledChartContainer = styled.div``;

const Index = () => {
  return (
    <MainContainer>
      <StyledBreakdown>
        <StyledKBuilders>
          <TypeACard>
            <div>Kingdom Builders</div>
            <div>1,800</div>
          </TypeACard>
        </StyledKBuilders>

        <BreakdownChart>
          <TypeACard>
            <div>Payment Breakdown</div>
          </TypeACard>
        </BreakdownChart>

        <TypeACard>C</TypeACard>
      </StyledBreakdown>
      <StyledChartContainer>
        <TypeACard>D</TypeACard>
      </StyledChartContainer>
    </MainContainer>
  );
};

export default Index;
