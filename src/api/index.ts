import axios from 'axios';
import { useRouter } from 'vue-router';
import { getToken, removeToken } from '@/utils/cookie';

const router = useRouter();
const api = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  response => response,
  error => {
    // when back-end returns unauthrized 401 error, remove the token and redirect to the login page
    if (error.response && error.response.status === 401) {
      removeToken();
      router.push({ name: 'Auth' });
    }
    return Promise.reject(error);
  }
);

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Include the token in the request headers
  }
  return config;
});

export default api;