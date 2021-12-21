import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CartScreen} from '../screens/CartScreen';
import {DeliveryInfoScreen} from '../screens/DeliveryInfoScreen';
import {PaymentScreen} from '../screens/PaymentScreen';

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
      <Stack.Screen name="Payment" component={PaymentScreen} />
    </Stack.Navigator>
  );
};
