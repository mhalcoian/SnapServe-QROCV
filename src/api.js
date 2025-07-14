import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.API_BASE,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token =
    localStorage.getItem("accessToken") ||
    sessionStorage.getItem("accessToken") ||
    import.meta.env.BEARER_TOKEN;

  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
