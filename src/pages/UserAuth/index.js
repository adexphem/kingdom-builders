import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { up } from "styled-breakpoints";

import { Button, Input } from "../../components";
import { config } from "../../config";
import { goToLogin } from "../../utilities/helpers";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const PageContent = styled.div`
  margin-top: 70px;

  ${up("lg")} {
    margin-top: 100px;
  }
`;

const StyledTitle = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.2rem;
  line-height: 1.813rem;
  text-align: center;
  color: ${({ theme }) => theme.color.titleGrey};

  ${up("lg")} {
    font-size: 1.375rem;
  }
`;

const FormContainer = styled.div`
  margin-top: 40px;
  min-width: 350px;

  ${up("lg")} {
    min-width: 550px;
  }
`;

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.secondary};
  width: 160px;
  margin: 0 auto;
`;

const CreateAccount = styled.label`
  line-height: 3rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.color.linkGrey};
  font-size: 0.875rem;
  text-align: center;
  display: block;

  a {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.color.primary};
  }
`;

const StyledCTAArea = styled.div`
  margin-top: 20px;
`;

export const index = (props) => {
  return (
    <StyledContainer>
      <PageContent>
        <StyledTitle>Access your account</StyledTitle>
        <FormContainer>
          <Input
            placeholder="youremail@gmail.com"
            label="Email Address"
            name="emailOtp"
            minlength={5}
            autoFocus
            disabled={false}
            onChange={() => {}}
            classes={`border-bottom`}
            errorMessage={""}
            type="email"
          />

          <Input
            placeholder="Enter your password"
            label="Password"
            name="password"
            minlength={5}
            autoFocus
            disabled={false}
            onChange={() => {}}
            classes={`border-bottom`}
            errorMessage={""}
            type="password"
            hasEye
          />

          <StyledCTAArea>
            <StyledButton>
              <Button click_event={goToLogin} button_text="Sign In" />
            </StyledButton>

            <CreateAccount>
              Don't have an account? <a href={`mailto:${config.createAccountEmail}`}>Create one here</a>
            </CreateAccount>
          </StyledCTAArea>
        </FormContainer>
      </PageContent>
    </StyledContainer>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(index);
