import { up } from "styled-breakpoints";
import styled from "styled-components";

export const FlexWrapper = styled.div`
  display: flex;
`;

export const StyledSection = styled.section`
  height: 100vh;
  left: 0;
  padding: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 99;

  &:before {
    background: rgba($color-black, 0.4);
    bottom: 0;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    z-index: -1;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  max-height: 90vh;
  max-width: 900px;
  overflow: auto;
  position: relative;
  border-radius: initial;
  top: 50%;
  width: 100%;
`;

export const Title = styled.label`
  font-family: ${({ theme }) => theme.fonts.primary};
  display: block;
  font-weight: 400;
  font-size: 1rem;
  line-height: 2.5rem;
  letter-spacing: 0.0001rem;

  ${up("lg")} {
    font-weight: 600;
    font-size: 1.3rem;
  }
`;

export const SubTitle = styled.label`
  font-family: ${({ theme }) => theme.fonts.primary};
  display: block;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 2.5rem;
  letter-spacing: 0.0001rem;

  ${up("lg")} {
    font-weight: 400;
    font-size: 1.125rem;
  }
`;
