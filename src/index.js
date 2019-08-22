import React from 'react';
import { StatusBar } from 'react-native';

import App from './App';

// import { Container } from './styles';

export default function Index() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <App />
    </>
  );
}
