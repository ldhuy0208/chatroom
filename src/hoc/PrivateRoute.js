import { Button } from "@material-ui/core";
import { setUser } from "actions/userAction";
import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router";

function PrivatePage(props) {
  return props.loading ? (
    "loadding"
  ) : !props.user ? (
    <Redirect to="/login" />
  ) : (
    props.children
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    loading: state.user.loading,
  };
};

export default withRouter(connect(mapStateToProps, { setUser })(PrivatePage));
