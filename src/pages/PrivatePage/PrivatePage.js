import { Button } from "@material-ui/core";
import { setUser } from "actions/userAction";
import chatroomApi from "apis/chatroomApi";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router";

function PrivatePage(props) {
  const [chatrooms, setChatrooms] = useState([]);

  const getAllChatrooms = () => {
    chatroomApi
      .getAll()
      .then((res) => {
        setChatrooms(res.data);
      })
      .catch((err) => {
        if (err.response.status === 401) props.history.push("/login");
      });
  };

  return (
    <div>
      <div>
        private route ne
        <Button
          onClick={() => {
            props.setUser(null);
            localStorage.removeItem("tokenCardApp");
          }}
        >
          logout
        </Button>
      </div>
      <div>
        <Button variant="outlined" onClick={getAllChatrooms}>
          Get all chat room
        </Button>
      </div>
      <ul>
        {chatrooms.map((room) => (
          <li key={room._id}>{room.name}</li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    loading: state.user.loading,
  };
};

export default withRouter(connect(mapStateToProps, { setUser })(PrivatePage));
