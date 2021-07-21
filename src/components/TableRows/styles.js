import { up } from "styled-breakpoints";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const StyledContainer = styled(Link)`
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 6px 12px;
  box-shadow: 0px 6px 58px rgba(196, 203, 214, 0.2236);
  border-radius: 15px;
  margin-bottom: 18px;
  background-color: ${({ theme }) => theme.color.white};
  transition: box-shadow 0.6s;
  text-decoration: none;

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;

export const StyledCol = styled.div`
  word-wrap: normal;
  padding: 3px 5px;
  flex: 1 1 0px;
  width: 0;
  flex-direction: column;
  display: ${({ hidden }) => (hidden ? "none" : "")};

  ${({ fixedSvg, fixedCol, fixedName, serialNo }) =>
    (fixedSvg &&
      css`
        max-width: 35px !important;
        height: 45px;
        display: flex;
        justify-content: center;
      `) ||
    (fixedCol &&
      css`
        min-width: 105px !important;
      `) ||
    (fixedName &&
      css`
        min-width: 180px !important;
      `) ||
    (serialNo &&
      css`
        max-width: 50px !important;
      `)}

  svg {
    height: 14px;
    fill: ${({ theme }) => theme.color.primary};
  }

  ${up("md")} {
  }

  ${up("lg")} {
    word-wrap: normal;
    padding: 3px 5px;
    flex: 1 1 0px;
    width: 0;
    line-height: 1.35rem;
    display: ${({ hidden }) => (hidden ? "block" : "")};
  }
`;

export const ColTitle = styled.div`
  line-height: 1.2rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.color.paleGrey};
  text-transform: capitalize;

  ${({ fixedDate, fixedStatus }) =>
    (fixedDate &&
      css`
        width: 100px;
      `) ||
    (fixedStatus &&
      css`
        width: 50px !important;
      `)}

  ${up("md")} {
    line-height: 1rem;
  }

  ${up("lg")} {
    line-height: 1.2rem;
    display: "";
  }
`;

export const hideScrollbars = css`
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    width: 0px;
    display: none;
    background: transparent; /* Chrome/Safari/Webkit */
  }
`;

export const ColBody = styled.div`
  display: flex;
  font-size: 0.875rem;
  white-space: nowrap;
  overflow: scroll;
  color: ${({ theme }) => theme.color.black};
  text-overflow: ellipsis;
  text-transform: capitalize;
  height: 20px;

  ${hideScrollbars}
`;
