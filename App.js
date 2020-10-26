import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import Barber from './index';
import CameraProvider from './src/components/CameraProvider';

const App = () => (
  <Provider store={store}>
    <CameraProvider>
      <Barber />
    </CameraProvider>
  </Provider>
);

export default App;
