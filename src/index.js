import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
// import { LP70_TOKEN_ID } from "./config/paths";

import { Provider } from "react-redux";
import store from "./redux/store";

// const token = localStorage.getItem(LP70_TOKEN_ID);

// axios.interceptors.request.use((request) => {
//   console.log("token", token);
//   if (!request.url.includes(INDEX) || !request.url.includes(LOGIN)) {
//     request.headers["Authorization"] = `Bearer ${token}`;
//     request.headers["Access-Control-Allow-Origin"] = "*";
//     request.headers["Access-Control-Allow-Headers"] = "Origin, X-Requested-With, Content-Type, Accept";
//   }

//   console.log("request", request);

//   return request;
// });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
