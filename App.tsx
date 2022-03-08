import React from 'react';
import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import {LeftDrawerNavigation} from './src/navigations/LeftDrawerNavigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App = () => {
  const linking: LinkingOptions<RootStackParamList> = {
    prefixes: ['emontaj://'],
    config: {
      screens: {
        Main: {
          screens: {
            ProfileStack: {
              screens: {
                OrderDetail: 'orderDetail',
              },
            },
          },
        },
      },
    },
  };

  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
        <LeftDrawerNavigation />
      </NavigationContainer>
    </Provider>
  );
};

type RootStackParamList = {
  Main: undefined;
};

export default App;
