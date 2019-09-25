import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { View, Text, StatusBar } from 'react-native';

import './config/ReactotronConfig';

import { store, persistor } from '~/store';
import App from './App';
const Index = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} >
        <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
        <App />
      </PersistGate>
    </Provider>
  );
}

export default App;
