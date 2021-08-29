import { up } from "styled-breakpoints";
import styled, { css } from "styled-components";

export const FlexWrapper = styled.div`
  display: flex;
  font-family: ${({ theme }) => theme.fonts.primary};
`;

export const PaymentModalContent = styled.div`
  text-align: left;
  line-height: 3rem;
`;

export const common = css`
  width: 100%;
  text-align: center;
  line-height: 2.3rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-family: ${({ theme }) => theme.fonts.primary};
`;

export const PMCCenter = styled.div`
  ${common}
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.color578e53};
`;

export const PMCName = styled.div`
  ${common}
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.pallyGrey};
`;

export const PMCData = styled(FlexWrapper)`
  flex-direction: column;
  justify-content: space-between;
  margin-top: 30px;

  ${up("lg")} {
    flex-direction: row;

    > div {
      max-width: 30%;
    }
  }
`;

export const PMCForm = styled.form`
  display: flex;
  font-family: ${({ theme }) => theme.fonts.primary};
  padding: 20px 30px;
  margin-top: 20px;
  flex-direction: column;
  border-radius: 3px;
  background: rgba(196, 196, 196, 0.13);
`;

export const PMCFormButton = styled.div`
  display: flex;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.secondary};
  width: 160px;
  margin: 15px auto;

  ${up("lg")} {
    width: 50%;
  }

  button {
    padding: 25px 0;
  }
`;
