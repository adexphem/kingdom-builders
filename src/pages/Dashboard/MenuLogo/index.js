import React from "react";
import styled from "styled-components";
import { up } from "styled-breakpoints";

import LP70Img from "../../../components/images/LP70.png";

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;

  img {
    height: 45px;

    ${up("lg")} {
      height: 65px;
    }
  }
`;

export default function index() {
  return (
    <LogoContainer>
      <img src={LP70Img} alt="app-logo" />
    </LogoContainer>
  );
}
