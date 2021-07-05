import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { up } from "styled-breakpoints";

import { INDEX, LOGIN } from "../../config/paths";
import LP70Img from "../../components/images/LP70.png";

import { goToLogin } from "../../utilities/helpers";
import { Button } from "../../components";

const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 25px rgba(7, 52, 4, 0.12);
`;

const NavWrapper = styled.nav`
  display: flex;
  height: 80px;
  margin: 0 auto;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;

  ${up("lg")} {
    max-width: 1200px;
    padding: 0;
  }
`;

const NavLogo = styled.div`
  img {
    width: 89px;
  }
`;

const StyledButton = styled.div`
  width: 130px;
`;

const navBar = () => {
  return (
    <Container>
      <NavWrapper>
        <NavLogo>
          <Link to={INDEX}>
            <img src={LP70Img} alt="app-logo" />
          </Link>
        </NavLogo>
        <StyledButton>
          <Button click_event={goToLogin} button_text="Login" />
        </StyledButton>
      </NavWrapper>
    </Container>
  );
};

export default navBar;
