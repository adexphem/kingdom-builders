import React, { useState, Fragment } from "react";

import { MenuLinks } from "../../../components";

const Index = ({ items }) => {
  const [activeText, updateActiveText] = useState("Dashboard");

  const handleClick = (value) => {
    updateActiveText(value);
  };

  return (
    <Fragment>
      {items &&
        items.map(({ title, icon }, id) => (
          <MenuLinks key={id} title={title} isActive={activeText === title} onClick={handleClick} icon={icon} />
        ))}
    </Fragment>
  );
};

export default Index;
