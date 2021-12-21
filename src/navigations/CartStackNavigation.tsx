import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CartScreen} from '../screens/CartScreen';
import {DeliveryInfoScreen} from '../screens/DeliveryInfo';

const Stack = createStackNavigator();

export const CartStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="DeliveryInfo" component={DeliveryInfoScreen} />
    </Stack.Navigator>
  );
};
