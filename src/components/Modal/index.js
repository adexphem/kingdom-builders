import React from "react";
import PropTypes from "prop-types";

import { Content, StyledSection, Title, SubTitle, Close, Body } from "./styles";
import { CloseIcon, PaperMoneyIcon } from "../icons";

const iconsInUse = {
  papermoney: <PaperMoneyIcon />,
};

const Modal = React.forwardRef((props, ref) => {
  return (
    <StyledSection>
      <Content>
        {props.onClose ? (
          <Close onClick={props.onClose}>
            <CloseIcon />
          </Close>
        ) : null}
        <Body>
          {props.icon ? iconsInUse[`${props.icon}`] : null}
          {props.title ? <Title>{props.title}</Title> : ""}
          {props.subTitle ? <SubTitle>{props.subTitle}</SubTitle> : ""}
          <div>{props.children}</div>
        </Body>
      </Content>
    </StyledSection>
  );
});

Modal.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default Modal;
