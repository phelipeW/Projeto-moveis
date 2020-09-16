import { combineReducers } from 'redux';
import product from './product';
import login from './login';
import register from './register';

const rootReducer = combineReducers({
  product,
  login,
  register,
});

export default rootReducer;
