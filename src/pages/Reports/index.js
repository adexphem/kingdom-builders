import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const MainContainer = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
`;

export const index = (props) => {
  return <MainContainer>Reports</MainContainer>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(index);
