import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_PLACEHOLDER_API,
  headers: {
    authorization: "Bearer " + localStorage.getItem("tokenCardApp"),
  },
});

export default axiosClient;
