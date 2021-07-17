import axios from "axios";
import { config } from "../config";

import { LP70_TOKEN_ID } from "../config/paths";

const token = localStorage.getItem(LP70_TOKEN_ID);

export default axios.create({
  baseURL: config.baseUrl,
  headers: {
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${token}`,
  },
});
