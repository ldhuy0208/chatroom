import axios from "axios";
import axiosClient from "./axiosClient";

const userApi = {
  login: (email, password) => {
    return axiosClient.post("/users/login", {
      email,
      password,
    });
  },

  getUserByToken: token => {
    return axiosClient.get('users/me', {
      headers: {
        authorization: 'Bearer ' + token
      }
    })
  }
};

export default userApi;
