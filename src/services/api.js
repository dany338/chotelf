import { create } from 'apisauce'
import { BACKEND_URL } from '../constants/backend';
import { authChanged } from '../services/auth';

const api = create({
    baseURL: BACKEND_URL,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Referrer-Policy': 'no-referrer',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
    timeout: 40000
})

api.axiosInstance.interceptors.request.use(async (config) => {
  const token = await authChanged();
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});


api.axiosInstance.interceptors.response.use(undefined, async (error) => {
  const errorResponse =  error.response;
  if (errorResponse && errorResponse.status === 401 && !!error.config &&  typeof error.config.canRetry  === 'undefined' ) {
    const token = await authChanged();
    if (token) {
      error.config.headers['Authorization'] = `Bearer ${token}`;
      error.config.canRetry = false;
      return api.axiosInstance.request(error.config)
    }
  }
  throw error;
})

export default api