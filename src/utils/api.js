import axios from "axios";
import deviceStorage from "./deviceStorage";

const baseUrl = process.env.NODE_ENV
  ? "http://localhost:8080/api/"
  : "https://shipwise.herokuapp.com/api/";

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
