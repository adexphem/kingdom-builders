import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { up } from "styled-breakpoints";
import { useParams } from "react-router-dom";

import { fetchBuilderList } from "../../redux/actions/kingdomBuilderAction";

const MainContainer = styled.div`
  width: auto;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  padding: 15px 5px;
  font-family: ${({ theme }) => theme.fonts.primary};

  ${up("md")} {
    padding: 15px 10px;
  }

  ${up("lg")} {
    padding: 15px 20px;
  }
`;

const PageTitle = styled.h1`
  width: 100%;
  line-height: 1.875rem;
  text-align: center;
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};

  ${up("md")} {
    font-size: 1.3rem;
  }

  ${up("lg")} {
    font-size: 1.7rem;
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
      <PageTitle>Kingdom Builder</PageTitle>
      <div>
        <div>{selectedPledger.name}</div>
        <div>{selectedPledger.phone_number}</div>
      </div>
    </MainContainer>
  );
};

export default React.memo(Index);
