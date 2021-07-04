import React from "react";
import { connect } from "react-redux";

export const index = (props) => {
  return <div>Welcome Here</div>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(index);
