import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LeftDrawerNavigation} from './src/navigations/LeftDrawerNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <LeftDrawerNavigation />
    </NavigationContainer>
  );
};

export default App;
