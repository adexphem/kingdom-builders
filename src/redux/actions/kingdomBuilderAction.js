import { ActionTypes } from "../constants/actionTypes";

export const setBuilderList = (list) => {
  return {
    type: ActionTypes.SET_BUILDERS_LIST,
    payload: list,
  };
};
