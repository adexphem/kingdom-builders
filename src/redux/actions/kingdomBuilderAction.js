import axios from "axios";
import { ActionTypes } from "../constants/actionTypes";
import { config } from "../../config";

export const setBuilderList = (list) => {
  return {
    type: ActionTypes.SET_BUILDERS_LIST,
    payload: list,
  };
};

export const fetchBuilderList = () => {
  return async (dispatch) => {
    const response = await axios.get(`${config.baseUrl}/kingdom_builder`);

    dispatch({
      type: ActionTypes.FETCH_KINGDOM_BUILDERS_LIST,
      payload: response.data,
    });
  };
};
