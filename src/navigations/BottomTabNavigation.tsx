import React from 'react';
import {HomeScreen} from '../screens/HomeScreen';
import {SpecialScreen} from '../screens/SpecialScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import {CartScreen} from '../screens/CartScreen';
import {globalStyle} from '../globalStyle';
import {BottomTabItem} from '../components/BottomTabItem';
import {CategorySearchScreen} from '../screens/CategorySearchScreen';
import {Header} from '../components/Header';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: globalStyle.colorPrimary,
        },
        tabBarShowLabel: false,
        header: () => <Header />,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
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
