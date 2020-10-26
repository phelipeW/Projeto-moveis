import { combineReducers } from 'redux';
import product from './product';
import login from './login';
import register from './register';
import barber from './barber';
import schedule from './schedule';

const rootReducer = combineReducers({
  product,
  login,
  register,
  barber,
  schedule,
});

export default rootReducer;
