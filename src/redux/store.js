import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middleware)
    // other store enhancers if any
  )
);

export default store;
