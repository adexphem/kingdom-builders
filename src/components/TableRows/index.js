import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Link } from "react-router-dom";

import StatusDot from "../StatusDot";

import { numberWithCommas } from "../../utilities/helpers";
import { KINGDOM_BUILDER_VIEW } from "../../config/paths";

dayjs.extend(utc);

const StyledContainer = styled(Link)`
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
  text-decoration: none;

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
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
  font-size: 0.75rem;
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
  font-size: 0.875rem;
  white-space: nowrap;
  overflow: scroll;
  color: ${({ theme }) => theme.color.black};
  text-overflow: ellipsis;
  text-transform: capitalize;
  height: 20px;

  ${hideScrollbars}
`;

const formatDate = (value) => {
  return dayjs.utc(value).format("DD MMM YYYY") || "22 Aug 2021";
};

const Index = ({ data }) => {
  return (
    <StyledContainer to={`${KINGDOM_BUILDER_VIEW}${data.id}`}>
      {data && (
        <Fragment>
          <StyledCol>
            <ColTitle>Status</ColTitle>
            <ColBody>
              <StatusDot status={data.status} />
            </ColBody>
          </StyledCol>
          <StyledCol>
            <ColTitle>Fullname</ColTitle>
            <ColBody>{data.name}</ColBody>
          </StyledCol>
          <StyledCol>
            <ColTitle>Phone No.</ColTitle>
            <ColBody>{data.phone_number}</ColBody>
          </StyledCol>
          <StyledCol>
            <ColTitle>Payment Mode</ColTitle>
            <ColBody>{data.payment_mode}</ColBody>
          </StyledCol>
          <StyledCol>
            <ColTitle>Amount Pledge</ColTitle>
            <ColBody>{`₦${numberWithCommas(data.amount_pledge)}`}</ColBody>
          </StyledCol>
          <StyledCol>
            <ColTitle>Amount Paid</ColTitle>
            <ColBody>{`₦${numberWithCommas(data.total_amount_paid)}`}</ColBody>
          </StyledCol>
          <StyledCol>
            <ColTitle>Added On</ColTitle>
            <ColBody>{formatDate(data.created_at)}</ColBody>
          </StyledCol>
          <StyledCol>
            <ColTitle>actions</ColTitle>
            <ColBody></ColBody>
          </StyledCol>
        </Fragment>
      )}
    </StyledContainer>
  );
};

export default React.memo(Index);
