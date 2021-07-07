import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const statusByColor = {
  full: "btnGreen049A04",
  part: "tintBlue",
  awaiting: "tintPink",
};

const StyledDot = styled.div`
  display: block;
  height: 10px;
  width: 10px;
  border-radius: 5px;
  margin-right: 5px;
  background-color: ${({ theme, status }) => theme.color[statusByColor[status]]};
`;

const index = ({ status }) => {
  return (
    <StyledContainer>
      <StyledDot status={status} /> {status}
    </StyledContainer>
  );
};

export default React.memo(index);
