import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {BottomTabNavigation} from './BottomTabNavigation';
import {LeftDrawerContent} from './LeftDrawerContent';
import {ContactScreen} from '../screens/ContactScreen';
import {LoginScreen} from '../screens/LoginScreen';
import {SignUpScreen} from '../screens/SignUpScreen';

const Drawer = createDrawerNavigator();
export const LeftDrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={() => <LeftDrawerContent />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Main" component={BottomTabNavigation} />
      <Drawer.Screen name="Contact" component={ContactScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="SignUp" component={SignUpScreen} />
    </Drawer.Navigator>
  );
};
