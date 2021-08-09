import React from "react";

import ProfileIcon from "../../components/icons/ProfileIcon";
import EmailIcon from "../../components/icons/EmailIcon";
import MobileIcon from "../../components/icons/MobileIcon";
import {
  InfoCard as Card,
  InfoCardTitle,
  InfoCardDesc,
  InfoCardProfileIcon,
  InfoCardH1,
  InfoCardH2,
  InfoCardG2,
} from "./styles";

export default function InfoCard() {
  return (
    <Card>
      <InfoCardTitle>Kingdom Builder Intel</InfoCardTitle>
      <InfoCardDesc>
        <InfoCardProfileIcon>
          <ProfileIcon />
        </InfoCardProfileIcon>
        <InfoCardH1>Akinwande Daniel</InfoCardH1>
        <InfoCardG2>
          <EmailIcon />
          <InfoCardH2>oluwole.daniel@gmail.com</InfoCardH2>
        </InfoCardG2>
        <InfoCardG2>
          <MobileIcon />
          <InfoCardH2>08012349900</InfoCardH2>
        </InfoCardG2>
      </InfoCardDesc>
    </Card>
  );
}
