import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LeftDrawerNavigation} from './src/navigations/LeftDrawerNavigation';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <LeftDrawerNavigation />
    </NavigationContainer>
  );
};

export default App;
