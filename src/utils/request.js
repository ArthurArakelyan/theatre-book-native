import axios, {Method} from "axios";

import {API_URL} from "../config";

import storage from "./storage";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(async (req) => {
  const user = await storage.get('user');

  if (req && req.headers && user?.id) {
    req.headers.Authorization = user.id;
  }

  return req;
});

function request(method: Method, url: string, data) {
  return api.request({
    method: method,
    url: url,
    data: data,
  });
}

export default request;
