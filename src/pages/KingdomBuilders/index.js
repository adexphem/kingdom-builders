import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { up } from "styled-breakpoints";

import { fetchBuilderList } from "../../redux/actions/kingdomBuilderAction";
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

  useEffect(() => {
    dispatch(fetchBuilderList());
  }, []);

  return (
    <MainContainer>
      <PageTitle>Kingdom Builders List</PageTitle>

      {buildersList && buildersList.pledgers ? (
        buildersList.pledgers.map((item, id) => <TableRows key={id} data={item} />)
      ) : (
        <div>loading</div>
      )}
    </MainContainer>
  );
};

export default React.memo(Index);
