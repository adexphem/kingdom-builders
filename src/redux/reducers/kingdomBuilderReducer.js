import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  pledgers: [],
  buildersCount: 0,
  zonalViewCount: [],
  paymentBreakdownCount: [],
  pledgerTotalAmountPaid: 0,
  paymentDetails: [],
};

function kingdomBuildersReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.FETCH_KINGDOM_BUILDERS_LIST:
      return { ...state, pledgers: payload };

    case ActionTypes.FETCH_KINGDOM_BUILDERS_COUNT:
      return { ...state, buildersCount: payload };

    case ActionTypes.FETCH_ZONAL_PLEDGERS_COUNT:
      return { ...state, zonalViewCount: payload };
    case ActionTypes.FETCH_ZONAL_PLEDGERS_COUNT_SUCCESS:
      return { ...state, zonalViewCount: payload };
    case ActionTypes.FETCH_ZONAL_PLEDGERS_COUNT_FAILURE:
      return { ...state, ...payload };

    case ActionTypes.FETCH_PAYMENT_BREAKDOWN_COUNT:
      return { ...state, paymentBreakdownCount: payload };
    case ActionTypes.FETCH_PAYMENT_BREAKDOWN_COUNT_SUCCESS:
      return { ...state, paymentBreakdownCount: payload };
    case ActionTypes.FETCH_PAYMENT_BREAKDOWN_COUNT_FAILURE:
      return { ...state, ...payload };

    case ActionTypes.FETCH_PLEDGER_TOTAL_AMOUNT_PAID:
      return { ...state, pledgerTotalAmountPaid: payload };
    case ActionTypes.FETCH_PLEDGER_TOTAL_AMOUNT_PAID_SUCCESS:
      return { ...state, pledgerTotalAmountPaid: payload };
    case ActionTypes.FETCH_PLEDGER_TOTAL_AMOUNT_PAID_FAILURE:
      return { ...state, ...payload };

    case ActionTypes.FETCH_PLEDGER_PAYMENT_DETAILS_BY_ID:
      return { ...state, paymentDetails: payload };
    case ActionTypes.FETCH_PLEDGER_PAYMENT_DETAILS_BY_ID_SUCCESS:
      return { ...state, paymentDetails: payload };
    case ActionTypes.FETCH_PLEDGER_PAYMENT_DETAILS_BY_ID_FAILURE:
      return { ...state, ...payload };

    default:
      return state;
  }
}

export default kingdomBuildersReducer;
