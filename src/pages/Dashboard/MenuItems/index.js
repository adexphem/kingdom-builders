import React, { useState } from "react";

import { MenuLinks } from "../../../components";

const Index = ({ items }) => {
  const [activeText, updateActiveText] = useState("Dashboard");

  const handleClick = (value) => {
    updateActiveText(value);
  };

  return (
    <nav>
      {items &&
        items.map(({ title, icon }, id) => (
          <MenuLinks key={id} title={title} isActive={activeText === title} onClick={handleClick} icon={icon} />
        ))}
    </nav>
  );
};

export default Index;
