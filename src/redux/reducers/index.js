import { combineReducers } from "redux";
import kingdomBuilders from "./kingdomBuilderReducer";
import login from "./loginReducer";
import logout from "./logoutReducer";

export default combineReducers({
  kingdomBuilders,
  login,
  logout,
});
