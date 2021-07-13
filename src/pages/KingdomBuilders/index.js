import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import { up } from "styled-breakpoints";

import { config } from "../../config";
import { setBuilderList } from "../../redux/actions/kingdomBuilderAction";
import TableRows from "../../components/TableRows";

const MainContainer = styled.div`
  width: auto;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  padding: 15px 20px;
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const PageTitle = styled.h1`
  width: 100%;
  line-height: 1.875rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};

  ${up("lg")} {
    font-size: 1.2rem;
  }
`;

const Index = () => {
  const dispatch = useDispatch();
  const buildersList = useSelector((state) => state.kingdomBuilders);

  const getPledgerList = async () => {
    const response = await axios.get(`${config.baseUrl}/kingdom_builder`).catch((err) => {
      console.log("Error", err);
    });

    if (response && response.data) {
      dispatch(setBuilderList(response.data));
    }
  };

  useEffect(() => {
    getPledgerList();
  }, []);

  return (
    <MainContainer>
      <PageTitle>Kingdom Builders List</PageTitle>

      {buildersList && buildersList.pledgers.map((item, id) => <TableRows key={id} data={item} />)}
    </MainContainer>
  );
};

export default React.memo(Index);
