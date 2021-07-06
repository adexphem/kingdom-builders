import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { MenuLinks } from "../../../components";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Index = ({ items }) => {
  const [activeText, updateActiveText] = useState("Dashboard");

  const handleClick = (value) => {
    updateActiveText(value);
  };

  return (
    <Fragment>
      {items &&
        items.map(({ title, icon, link }, id) => (
          <StyledLink to={link}>
            <MenuLinks
              key={id}
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
