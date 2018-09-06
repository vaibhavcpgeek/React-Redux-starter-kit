import types from "../actions/types";
import { combineReducers } from "redux";

// The list of users fetched via an API call
const userList = (state = [], action) => {
  switch (action.type) {
    case types.USER_GET_SUCCESS:
      return action.response || [];
    case types.USER_CLEAR:
      return [];
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case types.USER_GET_REQUEST:
      return true;
    case types.USER_GET_RECEIVE:
      return false;
    case types.USER_GET_ERROR:
      return false;
    default:
      return state;
  }
};

// The API call status
const error = (state = "", action) => {
  switch (action.type) {
    case types.USER_GET_REQUEST:
      return "";
    case types.USER_GET_RECEIVE:
      return "";
    case types.USER_GET_ERROR:
      return action.error.message;
    case types.USER_CLEAR_ERROR:
      return "";
    default:
      return state;
  }
};

export default combineReducers({
  userList,
  isFetching,
  error
});
