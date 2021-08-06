/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import StackRouter from './src/Router';

const App = () => {
  return (
    <>
      <StatusBar animated backgroundColor="#ffffff00" translucent />
      <StackRouter />
    </>
  );
};

export default App;
