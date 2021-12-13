import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {BottomTabNavigation} from './BottomTabNavigation';

const Drawer = createDrawerNavigator();
export const LeftDrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Main" component={BottomTabNavigation} />
    </Drawer.Navigator>
  );
};
