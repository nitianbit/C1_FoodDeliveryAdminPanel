// import { getLocalStorageItem } from "../storage";
import { BASE_URL, CONTENT_TYPE_URL_ENCODED } from "./constants";


export const ApiHandler = async ({
  endPoint,
  method,
  reqParam,
  token = "",
  content_type = ""
}) => {
  // const navigate = useNavigate()
  const acceptType = "application/json";
  const contentType = content_type ? content_type :
    reqParam instanceof FormData ? "multipart/form-data" : "application/json";
  let response = null,
    error = false;
  try {
    let content = {
      method: method.toUpperCase(),
      headers: await apiHeaders(
        reqParam,
        contentType,
        acceptType,
        (token = "")
      ),
    };

    if (
      method === "post" ||
      method === "delete" ||
      method === "patch" ||
      method === "put"
    ) {
      content = {
        ...content,
        body:
          reqParam instanceof FormData ? reqParam : JSON.stringify(reqParam),
      };
    }
    if (reqParam instanceof FormData || content_type === CONTENT_TYPE_URL_ENCODED) {
      let headers = await apiHeaders(reqParam, contentType, acceptType);
      response = await fetch(`${BASE_URL}${endPoint}`, {
        method: "POST",
        body: reqParam,
        headers: headers,
      });

      // response = await axios({
      //     method: 'post',
      //     url: endPoint,
      //     data: content.body,
      //     headers: {
      //         'Content-Type': `multipart/form-data; boundary=${reqParam._boundary}`,
      //     },
      // });
      // response = await axios.post(endPoint, reqParam, header);
    } else {
      response = await fetch(`${BASE_URL}${endPoint}`, content);
    }
  } catch (e) {
    console.log(e);
  } finally {
    // console.log(response)
    if (response?.status == 401) {
      localStorage.clear()
      window.location.pathname = "/"
      // window.location.reload()
    }
    if (response) {
      const resContentType = response.headers.get("content-type");

      let data = null;

      if (resContentType === null) return Promise.resolve(null);
      // else if (resContentType === "application/json")
      else if (resContentType === "application/json; charset=utf-8")
        data = await response.json();
      else if (resContentType.includes("text/plain"))
        data = await response.text();
      else if (resContentType.includes("text/html"))
        data = await response.text();
      else if (resContentType === "application/pdf") {
        data = await response.blob();
      } else if (resContentType === "application/vnd.ms-excel") {
        // data = new Blob([await response], { type: resContentType });
        data = new Blob([await response.blob()], { type: resContentType });
      }
      response = {
        data: data,
        status: response?.status,
        statusText: response?.statusText,
        headers: response.headers,
      };
    }

    if (
      response?.data?.status === "error" &&
      response?.data?.errCode === "ExpiredTokenException"
    ) {
      //logout
      return response;
    } else {
      return response;
    }
  }
};

export async function apiHeaders(
  reqParam,
  contentType,
  acceptType,
  refreshToken = ""
) {
  const token = refreshToken
    ? refreshToken
    : localStorage?.getItem('token');
  // console.log(token)
  const requestHeader =
    reqParam instanceof FormData
      ? {
        // "Content-Type": "multipart/form-data",
        token: token !== null ? `${token}` : "",
      }
      : {
        Accept: acceptType,
        "x-api-key": "web",
        "Content-Type": contentType,
        token: token !== null ? `${token}` : "",
      };
  const headers = requestHeader;
  return headers;
}

// this.code = code;
// this.data = data;
// this.message = message;
