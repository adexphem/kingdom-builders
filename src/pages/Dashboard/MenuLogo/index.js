import React from "react";
import styled from "styled-components";

import LP70Img from "../../../components/images/LP70.png";

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;

  img {
    height: 60px;
  }
`;

export default function index() {
  return (
    <LogoContainer>
      <img src={LP70Img} alt="app-logo" />
    </LogoContainer>
  );
}
