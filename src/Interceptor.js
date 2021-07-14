import axios from "axios";

import { INDEX, LOGIN, LP70_TOKEN_ID } from "./config/paths";

const instance = axios.create();
const token = localStorage.getItem(LP70_TOKEN_ID);

const Interceptor = instance.interceptors.request.use(
  (request) => {
    if (!request.url.includes(INDEX) || !request.url.includes(LOGIN)) {
      request.headers["Authorization"] = `Bearer ${token}`;
    }

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Interceptor;
