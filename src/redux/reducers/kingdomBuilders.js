import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  pledgers: [
    //   {
    //     status: "part",
    //     name: "Dayo omojomolo akinwole",
    //     payment_mode: "monthly",
    //     date: "2021-07-05T14:32:18.436Z",
    //     amount_pledge: 3540394,
    //     total_amount_paid: 5000,
    //     email: "fem.fem@gmail.com",
    //   },
    //   {
    //     status: "full",
    //     name: "Femi Olunuga",
    //     payment_mode: "monthly",
    //     date: "2021-06-05T14:32:18.436Z",
    //     amount_pledge: 2140394,
    //     total_amount_paid: 2140394,
    //     email: "fem.fem@gmail.com",
    //   },
    //   {
    //     status: "awaiting",
    //     name: "Daniel Kehinde",
    //     payment_mode: "quarterly",
    //     date: "2021-07-11T10:32:18.436Z",
    //     amount_pledge: 5000000,
    //     total_amount_paid: 1500000,
    //     email: "daniel_kehinde@gmail.com",
    //   },
  ],
};

function kingdomBuildersReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.FETCH_KINGDOM_BUILDERS_LIST:
      return { ...state, pledgers: payload };
    default:
      return state;
  }
}

export default kingdomBuildersReducer;
