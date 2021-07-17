import React from "react";
import styled from "styled-components";
import { up } from "styled-breakpoints";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button, Input } from "../../components";
import { config } from "../../config";
import { passwordPattern, emailPattern } from "../../utilities/helpers";

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

const FormContainer = styled.form`
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

const LoginFormSchema = yup.object().shape({
  email: yup.string().email().required("Valid email address is required."),
  password: yup.string().min(6).max(32).required("Password is required."),
});

const Index = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(LoginFormSchema) });

  const onSubmitHandler = async (data) => {
    console.log("data ", { data });

    reset();

    // const value =
    //   "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJleHAiOjE2MjY0Mjk1NDN9.lFcs6q1VZEiTy8eCS50hq5rlOshs9DoACNDJT93l2V0";
    // localStorage.setItem(LP70_TOKEN_ID, value);
    // return (window.location.href = DASH);
  };

  return (
    <StyledContainer>
      <PageContent>
        <StyledTitle>Access your account</StyledTitle>
        <FormContainer id="loginForm" onSubmit={handleSubmit(onSubmitHandler)}>
          <Input
            placeholder="youremail@gmail.com"
            label="Email Address"
            name="email"
            id="email"
            autoFocus
            disabled={false}
            classes={`border-bottom`}
            errorMessage={""}
            error={errors}
            type="email"
            {...register("email", { pattern: emailPattern })}
          />

          <Input
            placeholder="Enter your password"
            label="Password"
            name="password"
            id="password"
            autoFocus
            disabled={false}
            classes={`border-bottom`}
            errorMessage={""}
            type="password"
            error={errors}
            hasEye
            {...register("password", { pattern: passwordPattern })}
          />

          <StyledCTAArea>
            <StyledButton>
              <Button button_text="Sign In" type="submit" />
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

export default Index;
