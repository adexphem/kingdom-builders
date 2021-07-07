import React from "react";
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

const dataItems = [
  {
    status: "part",
    name: "Dayo omojomolo akinwole",
    payment_mode: "monthly",
    date: "2021-07-05T14:32:18.436Z",
    amount_pledge: 3540394,
    total_amount_paid: 5000,
    email: "fem.fem@gmail.com",
  },
  {
    status: "full",
    name: "Femi Olunuga",
    payment_mode: "monthly",
    date: "2021-06-05T14:32:18.436Z",
    amount_pledge: 2140394,
    total_amount_paid: 2140394,
    email: "fem.fem@gmail.com",
  },
  {
    status: "awaiting",
    name: "Daniel Kehinde",
    payment_mode: "quarterly",
    date: "2021-07-11T10:32:18.436Z",
    amount_pledge: 5000000,
    total_amount_paid: 1500000,
    email: "daniel_kehinde@gmail.com",
  },
];

const Index = () => {
  return (
    <MainContainer>
      <PageTitle>Kingdom Builders List</PageTitle>

      {dataItems && dataItems.map((item, id) => <TableRows key={id} data={item} />)}
    </MainContainer>
  );
};

export default Index;
