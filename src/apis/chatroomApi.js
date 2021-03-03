import axiosClient from "./axiosClientWithAuth";

export default {
  getAll: () => {
    return axiosClient.get("/chatrooms");
  },
};
