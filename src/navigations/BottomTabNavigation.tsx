import React from 'react';
import {SpecialScreen} from '../screens/SpecialScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import {CartScreen} from '../screens/CartScreen';
import {globalStyle} from '../globalStyle';
import {BottomTabItem} from '../components/BottomTabItem';
import {CategorySearchScreen} from '../screens/CategorySearchScreen';
import {Header} from '../components/Header';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStackNavigation} from './HomeStackNavigation';

const Tab = createBottomTabNavigator();
export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: globalStyle.colorPrimary,
        },
        tabBarShowLabel: false,
        header: () => <Header />,
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigation}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabItem focused={focused} name="home" label="Эхлэл" />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={CategorySearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabItem
              focused={focused}
              name="text-search"
              label="Ангилал"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Special"
        component={SpecialScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabItem focused={focused} name="heart" label="Онцлох" />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabItem focused={focused} name="cart" label="Карт" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabItem focused={focused} name="account" label="Профайл" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
