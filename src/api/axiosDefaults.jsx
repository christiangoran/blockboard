import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/";

axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

//We use these two axios instances to attach token interceptors to
//One for intercepting requests from client side
export const axiosReq = axios.create();
//and one for intercepting responses from server side
export const axiosRes = axios.create();
