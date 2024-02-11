import { ApiHandler } from "./apiHandler";
import { API_METHODS } from "./constants";

export const doGET = async function (url, token) {
  const reqParam = {};
  const method = API_METHODS.GET;
  const endPoint = url;
  try {
    const response = await ApiHandler({ reqParam, method, endPoint, token });
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const doPOST = async function (url, data, content_type="") {
  const reqParam = data;
  const method = API_METHODS.POST;
  const endPoint = url;
  try {
    const response = await ApiHandler({ reqParam, method, endPoint,content_type });
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const doPUT = async function (url, data) {
  const reqParam = data;
  const method = API_METHODS.PUT; // Assuming API_METHODS.PUT is defined
  const endPoint = url;
  try {
    const response = await ApiHandler({ reqParam, method, endPoint });
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const doDELETE = async function (url) {
  const method = API_METHODS.DELETE; // Assuming API_METHODS.DELETE is defined
  const endPoint = url;
  try {
    const response = await ApiHandler({ method, endPoint });
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
};
