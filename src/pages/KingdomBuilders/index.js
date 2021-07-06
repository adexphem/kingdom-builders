import React from "react";
import styled from "styled-components";

import TableRows from "../../components/TableRows";

const MainContainer = styled.div`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const dataItems = [
  {
    status: "part",
    name: "Dayo omojomolo",
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
];

const Index = () => {
  return (
    <MainContainer>
      <div>Kingdom Builders</div>

      {dataItems && dataItems.map((item, id) => <TableRows key={id} data={item} />)}
    </MainContainer>
  );
};

export default Index;
