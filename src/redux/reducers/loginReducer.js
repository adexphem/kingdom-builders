import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  inProgress: false,
};

function loginReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.LOGIN:
      return { ...state, ...payload };
    case ActionTypes.LOGIN_SUCCESS:
      return { ...state, ...payload };
    case ActionTypes.LOGIN_FAILURE:
      return { ...state, ...payload };
    default:
      return state;
  }
}

export default loginReducer;
