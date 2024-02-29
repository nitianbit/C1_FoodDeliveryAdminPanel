export const API_METHODS = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
};

// export const BASE_URL = "http://localhost:5400";
export const BASE_URL = "https://delivery-bac.onrender.com"
// export const BASE_URL = "https://rotibasket.shop/"
export const CONTENT_TYPE_URL_ENCODED = "application/x-www-form-urlencoded"

export const AUTH_ENDPOINTS = {
  SIGNUP: "/api/auth/register",
  LOGIN: "/api/auth/login",
};

export const USER = {
  CURRENT_USER: `/api/users/get`,
  DASHBOARD: `/api/users/get/dashboard`,
  UPDATE_USER: `/api/users/update`
}


export const MENUITEMS_ENDPOINTS = {
  CREATE: "/api/menuItems/create",
  GET_ALL: "/api/menuItems/get",
  GET_ID: (id) => `/api/menuItems/get/${id}`,
  UPDATE: (id) => `/api/menuItems/update/${id}`,
  DELETE: (id) => `/api/menuItems/delete/${id}`
}

export const ORDER_ENDPOINTS = {
  CREATE: "/api/order/create",
  GET_ALL: (status) => `/api/order/get?status=${status}`,
  GET_ID: (id) => `/api/order/get/${id}`,
  UPDATE: (id) => `/api/order/update/${id}/status`,
  DELETE: (id) => `/api/order/delete/${id}`
}

export const DRIVER_ENDPOINTS = {
  CREATE: "/api/driver/create",
  GET_ALL: `/api/driver/get`,
  GET_ID: (id) => `/api/driver/get/${id}`,
  UPDATE: (id) => `/api/driver/update/${id}`,
  DELETE: (id) => `/api/driver/delete/${id}`
}