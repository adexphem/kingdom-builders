import React from "react";
import PropTypes from "prop-types";

import { Content, StyledSection, Title, SubTitle } from "./styles";

const Modal = React.forwardRef((props, ref) => {
  return (
    <StyledSection>
      <Content>
        <div>
          {props.title ? <Title>{props.title}</Title> : ""}
          {props.subTitle ? <SubTitle>{props.subTitle}</SubTitle> : ""}
          <div>{props.children}</div>
        </div>
      </Content>
    </StyledSection>
  );
});

Modal.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default Modal;
