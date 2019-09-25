import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import './config/ReactotronConfig';
// import { Container } from './styles';

import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
      <Routes />
    </>
  );
}

export default App;
