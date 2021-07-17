import { combineReducers } from "redux";
import kingdomBuilders from "./kingdomBuilderReducer";
import login from "./loginReducer";

export default combineReducers({
  kingdomBuilders,
  login,
});
