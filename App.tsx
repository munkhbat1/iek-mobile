import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LeftDrawerNavigation} from './src/navigations/LeftDrawerNavigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <LeftDrawerNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
