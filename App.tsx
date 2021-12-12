import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from './src/screens/HomeScreen';
import {SpecialScreen} from './src/screens/SpecialScreen';
import {ProfileScreen} from './src/screens/ProfileScreen';
import {CartScreen} from './src/screens/CartScreen';
import {globalStyle} from './src/globalStyle';
import {BottomTabItem} from './src/components/BottomTabItem';
import {CategorySearchScreen} from './src/screens/CategorySearchScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarStyle: {
            backgroundColor: globalStyle.colorPrimary,
          },
          tabBarInactiveTintColor: globalStyle.colorShuttleGrey,
          tabBarActiveTintColor: globalStyle.colorIvory,
          tabBarShowLabel: false,
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
    </NavigationContainer>
  );
};

export default App;
