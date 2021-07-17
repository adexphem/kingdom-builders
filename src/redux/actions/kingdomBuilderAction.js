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