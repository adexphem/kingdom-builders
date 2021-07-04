import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { LOGIN, INDEX } from "../../config/paths";
import LP70Img from "../../components/images/LP70.png";

const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 25px rgba(7, 52, 4, 0.12);
`;

const NavWrapper = styled.nav`
  display: flex;
  height: 80px;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`;

const NavLogo = styled.div`
  img {
    width: 89px;
  }
`;

const NavLinks = styled.div``;

const navBar = () => {
  return (
    <Container>
      <NavWrapper>
        <NavLogo>
          <Link to={INDEX}>
            <img src={LP70Img} alt="app-logo" />
          </Link>
        </NavLogo>
        <Link to={LOGIN}>Login 101</Link>
      </NavWrapper>
    </Container>
  );
};

export default navBar;
