import React, { useState } from "react";

import { MenuLinks } from "../../../components";

const index = () => {
  // const [isActive]

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <nav>
      <MenuLinks title="Dashboard" isActive onClick={handleClick} icon="OpenBook" />
      <MenuLinks title="Kingdom Builders" onClick={handleClick} icon="People" />
      <MenuLinks title="My Profile" onClick={handleClick} icon="Profile" />
      <MenuLinks title="Reports" onClick={handleClick} icon="Report" />
    </nav>
  );
};

export default index;
