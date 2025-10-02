import { BASE_URL } from "@/lib/config";
import { refresh_token } from "@/services/authService";
import axios from "axios";

const apiClient = axios.create({
  baseURL: BASE_URL,
});

apiClient.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        const newAccessToken = await refresh_token();
        if (newAccessToken) {
          error.config.headers.Authorization = `Bearer ${newAccessToken}`;
          return axios(error.config);
        }
      } catch (error) {
        console.log("ERROR REFRESHING TOKEN");
      }
    }
    if (error.response && error.response.status != 401) {
      const errorMessage =
        error.response.data.message || "Something went wrong!";
      console.error("API Error:", errorMessage);
      alert(errorMessage);
    }
    return Promise.resolve(error);
  }
);

export default apiClient;
