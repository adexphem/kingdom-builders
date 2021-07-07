import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { MenuLinks } from "../../../components";
import { LP70_ACTIVE_TAB } from "../../../config/paths";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Index = ({ items }) => {
  const ACTIVE_TAB = localStorage.getItem(LP70_ACTIVE_TAB) || "Dashboard";
  const [activeText, updateActiveText] = useState(ACTIVE_TAB);

  const handleClick = (value) => {
    updateActiveText(value);
    localStorage.setItem(LP70_ACTIVE_TAB, value);
  };

  return (
    <Fragment>
      {items &&
        items.map(({ title, icon, link }, id) => (
          <StyledLink key={id} to={link}>
            <MenuLinks
              title={title}
              isActive={activeText === title}
              onClick={(value) => handleClick(value)}
              icon={icon}
            />
          </StyledLink>
        ))}
    </Fragment>
  );
};

export default Index;
