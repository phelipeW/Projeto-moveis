import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import Barber from './index';

const App = () => (
  <Provider store={store}>
    <Barber />
  </Provider>
);

export default App;
