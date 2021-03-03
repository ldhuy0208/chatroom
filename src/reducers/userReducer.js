import types from "actions/types";

const init = {
  user: null,
  loading: true,
};

const userReducer = (state = init, action) => {

  switch (action.type) {
    case types.SET_USER:
      return { user: action.payload, loading: false };
    default:
      return state;
  }
};

export default userReducer;
