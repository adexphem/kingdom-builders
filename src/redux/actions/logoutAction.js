import { ActionTypes } from "../constants/actionTypes";
import api from "../../apis";

export const logout = () => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.LOGOUT,
      payload: { inProgress: true },
    });

    await api
      .get("/logout")
      .then((res) => {
        dispatch({
          type: ActionTypes.LOGOUT_SUCCESS,
          payload: { ...res.data, inProgress: false },
        });
      })
      .catch((error) => {
        dispatch({
          type: ActionTypes.LOGOUT_FAILURE,
          payload: {
            error: `Error: ${error.message}`,
            inProgress: false,
          },
        });
      });
  };
};
