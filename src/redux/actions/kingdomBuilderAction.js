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

export const fetchBuildersCount = () => {
  return async (dispatch) => {
    await api
      .get("/kingdom_builders/count")
      .then((res) => {
        dispatch({
          type: ActionTypes.FETCH_KINGDOM_BUILDERS_COUNT,
          payload: { ...res.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: ActionTypes.FETCH_KINGDOM_BUILDERS_COUNT_FAILURE,
          payload: { error: "failed" },
        });
        console.log("error ", error.response);
      });
  };
};

export const fetchZonalPledgersCount = () => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.FETCH_ZONAL_PLEDGERS_COUNT,
      payload: { inProgress: true },
    });

    await api
      .get("/kingdom_builders/zonal_pledgers/count")
      .then((res) => {
        dispatch({
          type: ActionTypes.FETCH_ZONAL_PLEDGERS_COUNT_SUCCESS,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: ActionTypes.FETCH_ZONAL_PLEDGERS_COUNT_FAILURE,
          payload: { error: "failed", inProgress: false },
        });
      });
  };
};

export const fetchPaymentBreakdownCount = () => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.FETCH_PAYMENT_BREAKDOWN_COUNT,
      payload: { inProgress: true },
    });

    await api
      .get("/kingdom_builders/payment_breakdown/count")
      .then((res) => {
        dispatch({
          type: ActionTypes.FETCH_PAYMENT_BREAKDOWN_COUNT_SUCCESS,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: ActionTypes.FETCH_PAYMENT_BREAKDOWN_COUNT_FAILURE,
          payload: { error: "failed", inProgress: false },
        });
      });
  };
};

export const fetchPledgerAmountPaid = (email) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.FETCH_PLEDGER_TOTAL_AMOUNT_PAID,
      payload: { inProgress: true },
    });

    await api
      .get(`/kingdom_builder_payment/amount_paid/total?email=${email}`)
      .then((res) => {
        dispatch({
          type: ActionTypes.FETCH_PLEDGER_TOTAL_AMOUNT_PAID_SUCCESS,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: ActionTypes.FETCH_PLEDGER_TOTAL_AMOUNT_PAID_FAILURE,
          payload: { error: "failed", inProgress: false },
        });
      });
  };
};

export const fetchPaymentDetailsById = (id) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.FETCH_PLEDGER_PAYMENT_DETAILS_BY_ID,
      payload: { inProgress: true },
    });

    await api
      .get(`/kingdom_builder/${id}/payment`)
      .then((res) => {
        dispatch({
          type: ActionTypes.FETCH_PLEDGER_PAYMENT_DETAILS_BY_ID_SUCCESS,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: ActionTypes.FETCH_PLEDGER_PAYMENT_DETAILS_BY_ID_FAILURE,
          payload: { error: "failed", inProgress: false },
        });
      });
  };
};

export const addPaymentById = (data) => {
  const { id } = data;
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.CREATE_PLEDGER_PAYMENT,
      payload: { inProgress: true },
    });

    await api
      .post(`/kingdom_builder/${id}/payment`, data)
      .then((res) => {
        dispatch({
          type: ActionTypes.CREATE_PLEDGER_PAYMENT_SUCCESS,
          payload: { ...res.data, inProgress: false },
        });
      })
      .catch((error) => {
        dispatch({
          type: ActionTypes.CREATE_PLEDGER_PAYMENT_FAILURE,
          payload: {
            error: `Error: ${error.message}`,
            inProgress: false,
          },
        });
      });
  };
};
