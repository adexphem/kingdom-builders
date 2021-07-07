import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import StatusDot from "../StatusDot";

import { numberWithCommas, removeUnderscore } from "../../utilities/helpers";

dayjs.extend(utc);

const StyledContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 6px 12px;
  box-shadow: 0px 6px 58px rgba(196, 203, 214, 0.2236);
  border-radius: 15px;
  margin-bottom: 18px;
  background-color: ${({ theme }) => theme.color.white};
  transition: box-shadow 0.6s;

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    cursor: pointer;
  }
`;

const StyledCol = styled.div`
  word-wrap: normal;
  padding: 3px 5px;
  flex: 1 1 0px;
  width: 0;
`;

const ColTitle = styled.div`
  line-height: 1.875rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.color.paleGrey};
  text-transform: capitalize;

  ${({ fixedDate, fixedStatus }) =>
    (fixedDate &&
      css`
        width: 100px;
      `) ||
    (fixedStatus &&
      css`
        width: 50px !important;
        font-weight: bold;
      `)}
`;

const hideScrollbars = css`
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    width: 0px;
    display: none;
    background: transparent; /* Chrome/Safari/Webkit */
  }
`;

const ColBody = styled.div`
  display: flex;
  font-size: 1rem;
  white-space: nowrap;
  overflow: scroll;
  text-overflow: ellipsis;
  height: 20px;

  ${hideScrollbars}
`;

const formatDate = (value) => {
  return dayjs.utc(value).format("DD MMM YYYY") || "22 Aug 2021";
};

const formatHeader = (item) => {
  const isCheck = item[0] === "amount_pledge" || item[0] === "total_amount_paid";
  return isCheck ? <ColBody>{`₦${numberWithCommas(item[1])}`}</ColBody> : <ColBody>{item[1]}</ColBody>;
};

const Index = ({ data }) => {
  const rowValue = Object.entries(data);

  return (
    <StyledContainer>
      {data &&
        rowValue.map((item, id) => (
          <Fragment key={id}>
            <StyledCol>
              <ColTitle>{item[0] === "total_amount_paid" ? "Paid" : removeUnderscore(item[0])}</ColTitle>
              {item[0] === "status" && (
                <ColBody>
                  <StatusDot status={item[1]} />
                </ColBody>
              )}

              {item[0] === "date" ? (
                <ColBody>{formatDate(item[1])}</ColBody>
              ) : item[0] !== "status" ? (
                formatHeader(item)
              ) : (
                ""
              )}
            </StyledCol>
          </Fragment>
        ))}
    </StyledContainer>
  );
};

export default React.memo(Index);
