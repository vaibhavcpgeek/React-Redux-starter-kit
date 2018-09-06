import types from "./types";

export const actions = {
  // Thunks
  fetch: () => async dispatch => {
    dispatch({ type: types.USER_GET_REQUEST });
    try {
      const response = await fetch("/api/users").then(r => r.json());
      dispatch({ type: types.USER_GET_SUCCESS, response });
    } catch (error) {
      dispatch({ type: types.USER_GET_ERROR, error });
    }
  },
  // Actions Creators
  clearError: () => ({ type: types.USER_CLEAR_ERROR }),
  clear: () => ({ type: types.USER_CLEAR })
};
