import * as React from 'react';
import { Provider } from 'react-redux';
import store from '../../src/redux/store';
import SpotCheckScreen from './Spotcheck';

export default function App() {
  return (
    <Provider store={store}>
      <SpotCheckScreen />
    </Provider>
  );
}
