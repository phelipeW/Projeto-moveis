import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { parseError } from '../helpers';

async function getToken() {
  const token = await AsyncStorage.getItem('barberadmin:token');
  return token;
}

const api = axios.create({ baseURL: 'https://barberadmin.herokuapp.com' });

api.interceptors.request.use(async (cfg) => {
  cfg.headers['Accept-Language'] = 'pt';
  const token = await getToken();
  console.tron.log('token', token);
  if (token) {
    cfg.headers.Authorization = `Bearer ${token}`;
  }
  return cfg;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    parseError(error);
    if (error.config && error.response && error.response.status === 401) {
      /* TODO: REFRESH TOKEN */
    }

    return Promise.reject(error);
  },
);

export default api;
