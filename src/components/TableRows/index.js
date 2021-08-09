import React, { Fragment } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { numberWithCommas } from "../../utilities/helpers";
import { KINGDOM_BUILDER_VIEW } from "../../config/paths";
import { PaperMoneyIcon } from "../icons";

import { StyledContainer, StyledCol, ColTitle, ColBody } from "./styles";

dayjs.extend(utc);

const formatDate = (value) => {
  return dayjs.utc(value).format("DD MMM YYYY") || "22 Aug 2021";
};

const Index = ({ data, type, id }) => {
  return (
    (type === "xl" && (
      <StyledContainer to={`${KINGDOM_BUILDER_VIEW}${data.id}`}>
        {data && (
          <Fragment>
            <StyledCol fixedName>
              <ColTitle>Fullname</ColTitle>
              <ColBody>{data.name}</ColBody>
            </StyledCol>
            <StyledCol hidden fixedCol>
              <ColTitle>Phone No.</ColTitle>
              <ColBody>{data.phone_number}</ColBody>
            </StyledCol>
            <StyledCol hidden>
              <ColTitle>Mode</ColTitle>
              <ColBody>{data.payment_mode}</ColBody>
            </StyledCol>
            <StyledCol>
              <ColTitle>Amt Pledge</ColTitle>
              <ColBody>{`₦${numberWithCommas(data.amount_pledge)}`}</ColBody>
            </StyledCol>
            <StyledCol hidden>
              <ColTitle>Amt Paid</ColTitle>
              <ColBody>{`₦${numberWithCommas(data.total_amount_paid)}`}</ColBody>
            </StyledCol>
            <StyledCol hidden>
              <ColTitle>Added On</ColTitle>
              <ColBody>{formatDate(data.created_at)}</ColBody>
            </StyledCol>
            <StyledCol fixedSvg>
              <PaperMoneyIcon />
            </StyledCol>
          </Fragment>
        )}
      </StyledContainer>
    )) ||
    (type === "sm" && (
      <StyledContainer>
        {data && (
          <Fragment>
            <StyledCol hidden serialNo>
              <ColTitle>SN</ColTitle>
              <ColBody>{id + 1}</ColBody>
            </StyledCol>
            <StyledCol fixedName>
              <ColTitle>Added On</ColTitle>
              <ColBody>{formatDate(data.created_at)}</ColBody>
            </StyledCol>
            <StyledCol fixedName>
              <ColTitle>Amount Paid</ColTitle>
              <ColBody>{`₦${numberWithCommas(data.amount_paid)}`}</ColBody>
            </StyledCol>
            <StyledCol fixedName hidden>
              <ColTitle>Entered by</ColTitle>
              <ColBody>{data.entered_by}</ColBody>
            </StyledCol>
          </Fragment>
        )}
      </StyledContainer>
    ))
  );
};

export default React.memo(Index);
