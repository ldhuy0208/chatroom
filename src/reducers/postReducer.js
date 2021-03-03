import types from "actions/types";

const stateInitial = {
  posts: [],
  selectedPost: null,
};

const postReducer = (state = stateInitial, action) => {
  switch (action.type) {
    case types.FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;