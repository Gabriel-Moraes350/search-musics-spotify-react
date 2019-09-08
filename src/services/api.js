import axios from 'axios';
import { toast } from 'react-toastify';

const api = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
});

api.interceptors.request.use(
  config => {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    };
    return config;
  },
  error => Promise.reject(error)
);

api.interceptors.response.use(
  response => Promise.resolve(response),
  error => {
    const { error: errorResponse } = error.response.data;
    console.log(error.response, errorResponse);
    if (
      errorResponse.status === 401 ||
      (errorResponse.status === 400 &&
        errorResponse.message === 'Only valid bearer authentication supported')
    ) {
      localStorage.setItem('access_token', '');
      setTimeout(() => {
        return (window.location = '/');
      }, 2000);
      toast.error('Access token expired, please Log again!');
    } else {
      toast.error('An error occurred, please try again!');
    }

    return Promise.reject(error.response);
  }
);

export default api;
