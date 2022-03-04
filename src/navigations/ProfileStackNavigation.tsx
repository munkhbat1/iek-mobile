import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProfileScreen} from '../screens/ProfileScreen';
import {OrdersScreen} from '../screens/OrdersScreen';

const Stack = createStackNavigator();

export const ProfileStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Orders" component={OrdersScreen} />
    </Stack.Navigator>
  );
};
