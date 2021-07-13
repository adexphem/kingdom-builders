import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { up } from "styled-breakpoints";

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
  const pledgersList = useSelector((state) => state.kingdomBuilders.pledgers);
  console.log("pledgersList ", pledgersList);
  return (
    <MainContainer>
      <PageTitle>Kingdom Builders List</PageTitle>

      {pledgersList && pledgersList.map((item, id) => <TableRows key={id} data={item} />)}
    </MainContainer>
  );
};

export default Index;
