import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.API_BASE || "https://api.snapserve.cubetech.cloud/api",
});

api.interceptors.request.use((config) => {
  const Hash = localStorage.getItem("guestHash") || import.meta.env.GUEST_TOKEN;
  if (Hash) {
    config.params = {
      ...(config.params || {}),
      hash: Hash,
    };
  }
  return config;
});

export default api;
