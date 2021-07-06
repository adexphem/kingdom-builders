import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { up } from "styled-breakpoints";

import LogoutLink from "./LogoutLink";
import MenuLogo from "./MenuLogo";
import MenuItems from "./MenuItems";

import { Menus } from "../../utilities/menuLinks";

const StyledContainer = styled.div`
  display: flex;
`;

const StyledSidebar = styled.div`
  height: 100vh;
  padding-left: 10px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 6px 58px rgba(196, 203, 214, 0.103611);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${up("md")} {
    min-width: 200px;
  }

  ${up("lg")} {
    min-width: 234px;
  }
`;

const ContentArea = styled.div`
  padding: 20px 30px;
`;

const StyledLogoutLink = styled.div`
  display: block;
  text-align: center;
  width: 100%;

  padding: 20px 0;
`;

const StyledTopArea = styled.div`
  padding: 20px 0;
`;

export const index = () => {
  const handleLogout = () => {
    return (window.location.href = "/");
  };

  return (
    <StyledContainer>
      <StyledSidebar>
        <StyledTopArea>
          <MenuLogo />
          <MenuItems items={Menus} />
        </StyledTopArea>

        <StyledLogoutLink>
          <LogoutLink onClick={handleLogout} />
        </StyledLogoutLink>
      </StyledSidebar>
      <ContentArea>Welcome to Dashboard</ContentArea>
    </StyledContainer>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(index);
