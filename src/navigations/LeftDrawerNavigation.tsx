import React, {useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {BottomTabNavigation} from './BottomTabNavigation';
import {LeftDrawerContent} from './LeftDrawerContent';
import {ContactScreen} from '../screens/ContactScreen';
import {LoginScreen} from '../screens/LoginScreen';
import {SignUpScreen} from '../screens/SignUpScreen';
import SplashScreen from 'react-native-splash-screen';
import {TermsOfServiceScreen} from '../screens/TermsOfServiceScreen';
import {FAQScreen} from '../screens/FAQScreen';

const Drawer = createDrawerNavigator();
export const LeftDrawerNavigation = () => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      SplashScreen.hide();
    }, 300);
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <Drawer.Navigator
      drawerContent={() => <LeftDrawerContent />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Main" component={BottomTabNavigation} />
      <Drawer.Screen name="Contact" component={ContactScreen} />
      <Drawer.Screen name="TermsOfService" component={TermsOfServiceScreen} />
      <Drawer.Screen name="FAQ" component={FAQScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="SignUp" component={SignUpScreen} />
    </Drawer.Navigator>
  );
};
