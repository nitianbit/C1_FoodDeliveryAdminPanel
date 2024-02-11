export const API_METHODS = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
};

export const BASE_URL = "http://localhost:5400";
export const CONTENT_TYPE_URL_ENCODED = "application/x-www-form-urlencoded"

export const AUTH_ENDPOINTS = {
  SIGNUP: "/api/auth/register",
  LOGIN: "/api/auth/login",
};


export const MENUITEMS_ENDPOINTS = {
  CREATE: "/api/menuItems/create",
  GET_ALL: "/api/menuItems/get",
  GET_ID: (id) => `/api/menuItems/get/${id}`,
  UPDATE: (id) => `/api/menuItems/update/${id}`,
  DELETE: "/api/menuItems/delete"
}