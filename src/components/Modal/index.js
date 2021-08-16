import React from "react";
import PropTypes from "prop-types";

import { Content, StyledSection, Title, SubTitle, Close } from "./styles";
import { CloseIcon } from "../icons";

const Modal = React.forwardRef((props, ref) => {
  return (
    <StyledSection>
      <Content>
        {props.onClose ? (
          <Close onClick={props.onClose}>
            <CloseIcon />
          </Close>
        ) : null}
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
