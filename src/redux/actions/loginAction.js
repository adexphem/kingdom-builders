import { ActionTypes } from "../constants/actionTypes";
import api from "../../apis";

export const login = (data) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.LOGIN,
      inProgress: true,
    });

    await api
      .post("/login", data)
      .then((res) => {
        dispatch({
          type: ActionTypes.LOGIN_SUCCESS,
          payload: res.data,
          inProgress: false,
        });
      })
      .catch((error) => {
        dispatch({
          type: ActionTypes.LOGIN_FAILURE,
          payload: {
            error: `Error: ${error.message}`,
            inProgress: false,
          },
        });
      });
  };
};
