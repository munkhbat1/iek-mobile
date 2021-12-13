import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {BottomTabNavigation} from './BottomTabNavigation';
import {LeftDrawerContent} from './LeftDrawerContent';

const Drawer = createDrawerNavigator();
export const LeftDrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={() => <LeftDrawerContent />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Main" component={BottomTabNavigation} />
    </Drawer.Navigator>
  );
};
