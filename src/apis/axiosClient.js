import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_PLACEHOLDER_API,
  headers: {
    // authorization: localStorage.getItem('tokenCardApp')
  }
})

export default axiosClient;