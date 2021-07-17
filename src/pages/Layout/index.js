import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { up } from "styled-breakpoints";
import { Switch, Route } from "react-router-dom";

import LogoutLink from "./LogoutLink";
import MenuLogo from "./MenuLogo";
import MenuItems from "./MenuItems";

import { Menus } from "../../utilities/menuLinks";
import { DASH, KINGDOM_BUILDERS, PROFILE, REPORT, LP70_TOKEN_ID, LP70_ACTIVE_TAB } from "../../config/paths";
import Dashboard from "../Dashboard";
import KingdomBuilders from "../KingdomBuilders";
import Profile from "../MyProfile";
import Reports from "../Reports";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledSidebar = styled.div`
  height: 100vh;
  padding-left: 10px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 6px 58px rgba(196, 203, 214, 0.103611);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 300px;
  overflow: auto;
  position: -webkit-sticky;
  position: sticky;
  top: 1px;

  ${up("md")} {
    min-width: 200px;
  }

  ${up("lg")} {
    min-width: 234px;
  }
`;

const ContentArea = styled.div`
  width: 100vw;
  padding: 20px 5px;
  margin: 0 20px;
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
    localStorage.removeItem(LP70_TOKEN_ID);
    localStorage.removeItem(LP70_ACTIVE_TAB);
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
      <ContentArea>
        <Switch>
          <Route path={DASH} component={Dashboard} />
          <Route path={KINGDOM_BUILDERS} component={KingdomBuilders} />
          <Route path={PROFILE} component={Profile} />
          <Route path={REPORT} component={Reports} />
          <Route>404 Not Found!</Route>
        </Switch>
      </ContentArea>
    </StyledContainer>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(index);
