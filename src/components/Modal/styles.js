import { up } from "styled-breakpoints";
import styled from "styled-components";

export const FlexWrapper = styled.div`
  display: flex;
`;

export const StyledSection = styled.section`
  height: 100%;
  left: 0;
  padding: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  background: rgba(51, 51, 51, 0.6);

  transition: {
    duration: 0.25;
  }

  &:before {
    background: rgba(0, 0, 0, 0.5);
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
  margin: 0 30px;
  max-height: 98vh;
  overflow: auto;
  position: relative;
  border-radius: 0.5rem;
  top: 10%;
  width: auto;
  background: white;

  ${up("lg")} {
    max-width: 900px;
    max-height: 90vh;
    margin: 0 auto;
    top: 20%;
  }
`;

export const Body = styled.div`
  text-align: center;
  padding: 20px;

  svg {
    height: 20px;
    fill: ${({ theme }) => theme.color.primary};

    ${up("lg")} {
      height: 30px;
    }
  }
`;

export const Title = styled.label`
  font-family: ${({ theme }) => theme.fonts.primary};
  display: block;
  font-weight: 400;
  text-align: center;
  font-size: 1.5rem;
  line-height: 2.5rem;
  letter-spacing: 0.0001rem;

  ${up("lg")} {
    font-weight: 400;
    font-size: 2rem;
    line-height: 3.5rem;
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

export const Close = styled.div`
  padding: 10px;
  right: 0;
  position: absolute;
  border-radius: 7px;
  background: ${({ theme }) => theme.color.colorf4f9fd};

  svg {
    fill: ${({ theme }) => theme.color.primary};
    height: 12px;
  }

  &:hover {
    cursor: pointer;
    background: rgba(4, 154, 4, 0.13);
  }
`;
