
import axios from "axios";

const service = axios.create({ baseURL: "http://localhost:8080/api" });
service.defaults.headers.post["Content-Type"] = "application/json";

service.interceptors.request.use(function (config) {
  const callLocalPackage = window.localStorage.getItem("token");
  const token = callLocalPackage !== '' ?callLocalPackage : "";
  config.headers.Authorization = token
    ? `Bearer ${token}`
    : "";
  return config;
});

export default service ;