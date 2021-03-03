import axiosClient from "apis/axiosClient"
import types from "./types"

export const fetchPost = () => async (dispatch) => {
  try{
    const posts = (await axiosClient.get('/posts')).data
    dispatch({
      type: types.FETCH_POSTS,
      payload: posts
    })
  }catch(e){
    throw e;
  }
}