import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import StatusDot from "../StatusDot";

dayjs.extend(utc);

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 6px 12px;
  box-shadow: 0px 6px 58px rgba(196, 203, 214, 0.2236);
  border-radius: 15px;
  margin-bottom: 18px;
  background-color: ${({ theme }) => theme.color.white};
`;

const StyledCol = styled.div`
  display: block;
  min-width: 40px;
  max-width: 190px;
  word-wrap: normal;
  padding: 3px 5px;
  overflow-wrap: break-word;
`;

const ColTitle = styled.div`
  line-height: 1.875rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.color.paleGrey};
`;

const ColBody = styled.div`
  font-size: 1rem;
`;

const formatDate = (value) => {
  return dayjs.utc(value).format("DD MMM YYYY") || "22 Aug 2021";
};

const Index = ({ data }) => {
  const rowValue = Object.entries(data);

  return (
    <StyledContainer>
      {data &&
        rowValue.map((item, id) => (
          <StyledCol key={id}>
            <ColTitle>{item[0] === "total_amount_paid" ? "Amount Paid" : item[0]}</ColTitle>
            {item[0] === "status" && (
              <ColBody>
                <StatusDot status={item[1]} />
              </ColBody>
            )}

            {item[0] === "date" ? (
              <ColBody>{formatDate(item[1])}</ColBody>
            ) : item[0] !== "status" ? (
              <ColBody>{item[1]}</ColBody>
            ) : (
              ""
            )}
          </StyledCol>
        ))}
    </StyledContainer>
  );
};

export default Index;
