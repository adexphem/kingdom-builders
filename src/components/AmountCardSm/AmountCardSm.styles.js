import styled from "styled-components";
import { up } from "styled-breakpoints";

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 74, 0, 0.08);
  border-radius: 3px;
`;

export const StyledH2 = styled.h2`
  font-weight: bold;
  font-size: 1rem;
  line-height: 1rem;
  text-align: center;
  color: #578e53;
  margin-bottom: -3px;
`;

export const StyledAmount = styled.div`
  font-size: 1.5rem;

  ${up("lg")} {
    font-size: 1.75rem;
  }
`;
