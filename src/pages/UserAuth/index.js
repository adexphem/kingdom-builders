import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { up } from "styled-breakpoints";

const StyledContainer = styled.div`
  /* width: 100vw;
  height: 95vh; */
  display: flex;
  justify-content: center;
`;

const PageContent = styled.div`
  padding: 50px 100px;
  margin-top: 50px;
  background-color: ${({ theme }) => theme.color.white};

  ${up("lg")} {
    margin-top: 90px;
  }
`;

export const index = (props) => {
  return (
    <StyledContainer>
      <PageContent>
        <div>Access your account</div>
      </PageContent>
    </StyledContainer>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(index);
