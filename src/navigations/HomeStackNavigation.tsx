import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {ProductDetailScreen} from '../screens/ProductDetailScreen';
import {IEKBizScreen} from '../screens/IEKBizScreen';

const Stack = createStackNavigator();

export const HomeStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      <Stack.Screen name="IEKBiz" component={IEKBizScreen} />
    </Stack.Navigator>
  );
};
