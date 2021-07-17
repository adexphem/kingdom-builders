import { ActionTypes } from "../constants/actionTypes";
import api from "../../apis";

export const setBuilderList = (list) => {
  return {
    type: ActionTypes.SET_BUILDERS_LIST,
    payload: list,
  };
};

export const fetchBuilderList = () => {
  return async (dispatch) => {
    await api
      .get("/kingdom_builder")
      .then((res) => {
        dispatch({
          type: ActionTypes.FETCH_KINGDOM_BUILDERS_LIST,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: ActionTypes.FETCH_KINGDOM_BUILDERS_LIST_FAILURE,
          payload: { error: "failed" },
        });
        console.log("error ", error.response);
      });
  };
};
