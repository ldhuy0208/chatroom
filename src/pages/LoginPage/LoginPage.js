import { Button, Container, FormGroup, TextField } from "@material-ui/core";
import { setUser } from "actions/userAction";
import userApi from "apis/userApi";
import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import "./LoginPage.scss";

function LoginPage(props) {
  console.log(props);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    userApi
      .login(email, password)
      .then((res) => {
        localStorage.setItem("tokenCardApp", res.data.token);
        props.setUser(res.data.user);
        props.history.push("/");
      })
      .catch((err) => {
        setError(err.response.data.error.message);
      });
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={onSubmit}>
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          label="Email"
        />
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          label="Password"
          type="password"
        />
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
        {error && <p>Error: {error}</p>}
      </form>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default withRouter(connect(mapStateToProps, { setUser })(LoginPage));
