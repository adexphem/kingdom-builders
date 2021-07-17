import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  inProgress: false,
};

function logoutReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.LOGOUT:
      return { ...state, ...payload };
    case ActionTypes.LOGOUT_SUCCESS:
      return { ...state, ...payload };
    case ActionTypes.LOGOUT_FAILURE:
      return { ...state, ...payload };
    default:
      return state;
  }
}

export default logoutReducer;
