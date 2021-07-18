import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { up } from "styled-breakpoints";
import { useParams } from "react-router-dom";

import { fetchBuilderList } from "../../redux/actions/kingdomBuilderAction";

import { Button } from "../../components";
import { CheckHexIcon } from "../../components/icons";

export const FlexWrapper = styled.div`
  display: flex;
`;

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

const MainContainer = styled.div`
  width: auto;
  padding: 15px 5px;
  font-family: ${({ theme }) => theme.fonts.primary};

  ${up("md")} {
    padding: 15px 10px;
  }

  ${up("lg")} {
    padding: 15px 10px;
  }
`;

const ViewContent = styled(FlexWrapper)`
  width: auto;
  flex: 1 1 0px;
  flex-direction: column;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.fonts.primary};

  ${up("lg")} {
    flex-direction: row;
  }
`;

const DetailsCard = styled.div`
  width: 100%;
  margin-right: 20px;
`;

const PaymentProgression = styled(SimpleCard)`
  margin-bottom: 15px;
  width: 100%;
`;

const PaymentTable = styled(SimpleCard)`
  width: 100%;
`;

const InfoCard = styled(SimpleCard)`
  min-width: 200px;

  ${up("md")} {
    min-width: 300px;
  }

  ${up("lg")} {
    min-width: 400px;
  }
`;

const PageTitle = styled.h1`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  line-height: 1.875rem;
`;

const StyledProfileName = styled(FlexWrapper)`
  align-items: center;
`;

const StyledText = styled.div`
  font-size: 1.875rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};

  span {
    color: ${({ theme }) => theme.color.pallyGrey};
  }

  ${up("md")} {
    font-size: 1rem;
  }

  ${up("lg")} {
    font-size: 1.875rem;
  }
`;

const StyledHexIcon = styled.div`
  align-content: center;
  display: flex;
  margin-right: 5px;

  svg {
    height: 24px;
    fill: ${({ theme }) => theme.color.primary};
  }
`;

const StyledButton = styled.div`
  width: 150px;
  font-size: 1.5rem;

  ${up("md")} {
    font-size: 1rem;
  }

  ${up("lg")} {
    font-size: 1.5rem;
  }
`;

const Index = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pledgers = useSelector((state) => state.kingdomBuilders.pledgers);
  const [selectedPledger, updateSelectedPledger] = useState("");

  useEffect(() => {
    if (pledgers.length < 1) {
      dispatch(fetchBuilderList());
    } else {
      updateSelectedPledger(pledgers.find((item) => item.id == id));
    }
  }, [pledgers]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <MainContainer>
      <PageTitle>
        <StyledProfileName>
          <StyledHexIcon>
            <CheckHexIcon />
          </StyledHexIcon>
          <StyledText>
            {selectedPledger.name} <span>Portfolio</span>
          </StyledText>
        </StyledProfileName>
        <StyledButton>
          <Button button_text="+ New Payment" id="makePaymentBtn" />
        </StyledButton>
      </PageTitle>
      <ViewContent>
        <DetailsCard>
          <PaymentProgression>payment progression</PaymentProgression>
          <PaymentTable>payment table</PaymentTable>
        </DetailsCard>
        <InfoCard>right</InfoCard>
      </ViewContent>
    </MainContainer>
  );
};

export default React.memo(Index);
