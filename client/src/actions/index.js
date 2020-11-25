import {SIGN_IN,SIGN_OUT,CREATE_STREAM,FETCH_STREMS,FETCH_STREM,DELETE_STREAM,EDIT_STREAM} from "./types";
import streams from '../apis/streams';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

// create a stream (POST)
export const createStream = (formValues) => async (dispatch, getState) => {
  const {userId} = getState().auth;
  const res = await streams.post('/streams', {...formValues, userId});
  dispatch({type: CREATE_STREAM, payload: res.data})
 };

// get all streams (GET)
export const fetchStreams = () => async dispatch => {
 const res = await streams.get("/streams");
 dispatch({type: FETCH_STREMS, payload: res.data})
};


// get single record
export const fetchStream = (id) => async dispatch => {
  const res = await streams.get(`/streams/${id}`);
  dispatch({type: FETCH_STREMS, payload: res.data})
};

// edit stream (put)
export const editStream = (formValues, id) => async dispatch => {
  const res = await streams.put(`/streams/${id}`, formValues);
  dispatch({type: EDIT_STREAM, payload: res.data})
};

// delete
export const deleteStream = (id) => async dispatch => {
  const res = await streams.delete(`/streams/${id}`);
  dispatch({type: DELETE_STREAM, payload: id});
};
