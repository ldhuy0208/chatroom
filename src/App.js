import { Button } from "@material-ui/core";
import { fetchPost } from "actions/postAction";
import { setUser } from "actions/userAction";
import userApi from "apis/userApi";
import PrivateRoute from "hoc/PrivateRoute";
import HomePage from "pages/HomePage/HomePage";
import LoginPage from "pages/LoginPage/LoginPage";
import PrivatePage from "pages/PrivatePage/PrivatePage";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router";

function App(props) {
  const verifyToken = () => {
    const token = localStorage.getItem("tokenCardApp");
    if (token) {
      userApi
        .getUserByToken(token)
        .then((res) => {
          props.setUser(res.data);
        })
        .catch((err) => {
          props.setUser(null);
          console.log(err.response.data.error.message);
        });
    } else {
      //node KHO HON REACT
      props.setUser(null);
    }
  };

  useEffect(() => {
    verifyToken();
  }, []);

  return (
    <Switch>
      <Route path="/login">
        <LoginPage />
      </Route>

      <Route path="/private">
        <PrivateRoute>
          <PrivatePage />
        </PrivateRoute>
      </Route>

      <Route path="/public">public page</Route>
      <Route path="/" exact>
        <HomePage />
      </Route>
    </Switch>
  );
}

export default connect(null, { setUser })(App);
