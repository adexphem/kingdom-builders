import { up } from "styled-breakpoints";
import styled from "styled-components";

export const FlexWrapper = styled.div`
  display: flex;
  font-family: ${({ theme }) => theme.fonts.primary};
`;

export const SimpleCard = styled.div`
  padding: 6px 12px;
  border-radius: 5px;
  box-shadow: 0px 6px 58px rgba(196, 203, 214, 0.2236);
  background-color: ${({ theme }) => theme.color.white};
  transition: box-shadow 0.8s;
  text-decoration: none;

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  }
`;

export const MainContainer = styled.div`
  width: auto;
  padding: 15px 5px;
  font-family: ${({ theme }) => theme.fonts.primary};

  ${up("md")} {
    padding: 15px 10px;
  }

  ${up("lg")} {
    padding: 15px 10px;
  }
`;

export const ViewContent = styled(FlexWrapper)`
  width: auto;
  flex: 1 1 0px;
  flex-direction: column;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.fonts.primary};

  ${up("lg")} {
    flex-direction: row;
  }
`;

export const DetailsCard = styled.div`
  width: 100%;
  margin-right: 20px;
`;

export const PaymentTable = styled(SimpleCard)`
  width: 100%;
`;

export const InfoCard = styled(SimpleCard)`
  min-width: 200px;
  margin-top: 15px;
  height: fit-content;
  padding: 20px;

  ${up("md")} {
    min-width: 300px;
  }

  ${up("lg")} {
    min-width: 400px;
    margin-top: 0;
  }
`;

export const InfoCardTitle = styled.div`
  line-height: 2.375rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.375rem;
  text-align: center;
`;

export const InfoCardDesc = styled(FlexWrapper)`
  flex-direction: column;
  align-items: center;
  padding: 2px 10px;
`;

export const InfoCardProfileIcon = styled.div`
  text-align: center;
  margin: 10px 0;

  svg {
    height: 80px;
    fill: ${({ theme }) => theme.color.primary};
  }
`;

export const InfoCardH1 = styled.div`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

export const InfoCardH2 = styled.div`
  font-size: 0.875rem;
`;

export const InfoCardG2 = styled.div`
  display: flex;
  align-items: center;
  line-height: 1.75rem;

  svg {
    height: 14px;
    fill: ${({ theme }) => theme.color.primary};
    margin-right: 6px;
  }
`;

export const InfoCardDetails = styled.div`
  max-width: 97%;
  padding: 10px 15px;
  background: rgba(248, 255, 250, 0.5);
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const InforCardActions = styled(FlexWrapper)`
  flex-direction: row;
  justify-content: space-between;

  button {
    max-width: 170px;
  }
`;

export const DetailRow = styled(FlexWrapper)`
  justify-content: space-between;
  padding: 5px 0;
  width: 100%;
`;

export const DetailBullet = styled.div`
  display: flex;
  flex-direction: column;
  height: 40px;
  overflow-y: hidden;

  label {
    font-size: 0.688rem;
    color: ${({ theme }) => theme.color.color585858};
  }
`;

export const DetailBulletText = styled.div`
  display: block;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme.color.color032E00};
  text-transform: capitalize;
`;

export const PageTitle = styled.h1`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  line-height: 1.875rem;
`;

export const StyledProfileName = styled(FlexWrapper)`
  align-items: center;
`;

export const StyledText = styled.div`
  font-size: 1.875rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};

  span {
    color: ${({ theme }) => theme.color.pallyGrey};
  }

  ${up("md")} {
    font-size: 1rem;
  }

  ${up("lg")} {
    font-size: 1.875rem;
  }
`;

export const StyledHexIcon = styled.div`
  align-content: center;
  display: flex;
  margin-right: 5px;

  svg {
    height: 24px;
    fill: ${({ theme }) => theme.color.primary};
  }
`;

export const StyledButton = styled.div`
  width: 150px;
  font-size: 1.5rem;

  ${up("md")} {
    font-size: 1rem;
  }

  ${up("lg")} {
    font-size: 1.5rem;
  }
`;

export const Title = styled.label`
  font-family: ${({ theme }) => theme.fonts.primary};
  display: block;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 2.5rem;
  letter-spacing: 0.0001rem;
`;

export const EmptyContent = styled(FlexWrapper)`
  flex-direction: column;

  svg {
    height: 130px;
    padding: 20px 0;

    ${up("lg")} {
      height: 200px;
    }
  }
`;

export const EmptyContentText = styled.h1`
  width: 100%;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.875rem;

  ${up("lg")} {
    font-size: 1.5rem;
  }
`;
