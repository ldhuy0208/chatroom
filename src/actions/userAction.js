import axiosClient from "apis/axiosClient";
import types from "./types";

export const validationToken = (token) => {
  axiosClient.get("/user").then((res) => {
    console.log(res);
  });
};

export const setUser = (user) => {
  return {
    type: types.SET_USER,
    payload: user,
  };
};
