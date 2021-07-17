import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  account: {},
};

function loginReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.LOGIN_SUCCESS:
      return { ...state, account: payload };
    default:
      return state;
  }
}

export default loginReducer;
