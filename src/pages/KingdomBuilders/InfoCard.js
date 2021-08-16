import React from "react";

import ProfileIcon from "../../components/icons/ProfileIcon";
import EmailIcon from "../../components/icons/EmailIcon";
import MobileIcon from "../../components/icons/MobileIcon";
import { Button } from "../../components";
import { formatDate, numberWithCommas } from "../../utilities/helpers";

import {
  InfoCard as Card,
  InfoCardTitle,
  InfoCardDesc,
  InfoCardProfileIcon,
  InfoCardH1,
  InfoCardH2,
  InfoCardG2,
  InfoCardDetails,
  DetailBullet,
  DetailRow,
  DetailBulletText,
  InforCardActions,
} from "./styles";

const InfoCard = ({ profile, paymentDetails, onClick }) => {
  const isPaymentMade = paymentDetails.length > 0;
  const { name, email, phone_number, areas_id, payment_mode, pledge_type, status, amount_pledge } = profile || {};
  const lastPaidDay = isPaymentMade ? paymentDetails[paymentDetails.length - 1].created_at : "";

  return (
    <Card>
      <InfoCardTitle>Kingdom Builder Intel</InfoCardTitle>
      <InfoCardDesc>
        <InfoCardProfileIcon>
          <ProfileIcon />
        </InfoCardProfileIcon>
        <InfoCardH1>{name && name.toUpperCase()}</InfoCardH1>
        <InfoCardG2>
          <EmailIcon />
          <InfoCardH2>{email}</InfoCardH2>
        </InfoCardG2>
        <InfoCardG2>
          <MobileIcon />
          <InfoCardH2>{phone_number}</InfoCardH2>
        </InfoCardG2>
      </InfoCardDesc>
      <InfoCardDetails>
        <DetailRow>
          <DetailBullet>
            <label>Province</label>
            <DetailBulletText>Lagos Province 70</DetailBulletText>
          </DetailBullet>

          <DetailBullet>
            <label>Area</label>
            <DetailBulletText>{areas_id}</DetailBulletText>
          </DetailBullet>
        </DetailRow>

        <DetailRow>
          <DetailBullet>
            <label>Payment Mode</label>
            <DetailBulletText>{payment_mode}</DetailBulletText>
          </DetailBullet>

          <DetailBullet>
            <label>Pledge Type</label>
            <DetailBulletText>{pledge_type}</DetailBulletText>
          </DetailBullet>

          <DetailBullet>
            <label>Status</label>
            <DetailBulletText>{status}</DetailBulletText>
          </DetailBullet>
        </DetailRow>

        <DetailRow>
          <DetailBullet>
            <label>Last Payment</label>
            <DetailBulletText>{isPaymentMade ? formatDate(lastPaidDay) : "No payment yet"}</DetailBulletText>
          </DetailBullet>

          <DetailBullet>
            <label>Amount Pledge</label>
            <DetailBulletText>{numberWithCommas(amount_pledge)}</DetailBulletText>
          </DetailBullet>
        </DetailRow>
      </InfoCardDetails>
      <InforCardActions>
        <Button button_text="+ Make Payment" onClick={onClick} />
        <Button button_text="Send Reminder" icon="email" type="email" />
      </InforCardActions>
    </Card>
  );
};

export default React.memo(InfoCard);
