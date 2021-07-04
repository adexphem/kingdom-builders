import { CREATE_PLEDGER, RETRIEVE_PLEDGERS, UPDATE_PLEDGER } from "../actions/types";

const initialState = [];

function kingdomBuildersReducer(kBuilders = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_PLEDGER:
      return [...kBuilders, payload];

    case RETRIEVE_PLEDGERS:
      return payload;

    case UPDATE_PLEDGER:
      return kBuilders.map((list) => {
        if (list.id === payload.id) {
          return {
            ...list,
            ...payload,
          };
        } else {
          return list;
        }
      });

    // case DELETE_TUTORIAL:
    //   return kBuilders.filter(({ id }) => id !== payload.id);

    // case DELETE_ALL_kBuilders:
    //   return [];

    default:
      return kBuilders;
  }
}

export default kingdomBuildersReducer;
