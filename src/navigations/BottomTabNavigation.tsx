import React from 'react';
import {SpecialScreen} from '../screens/SpecialScreen';
import {globalStyle} from '../globalStyle';
import {BottomTabItem} from '../components/BottomTabItem';
import {CategorySearchScreen} from '../screens/CategorySearchScreen';
import {Header} from '../components/Header';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStackNavigation} from './HomeStackNavigation';
import {useAppSelector} from '../redux/hooks';
import {selectUser} from '../redux/slices/userSlice';
import {CartStackNavigation} from './CartStackNavigation';
import {ProfileStackNavigation} from './ProfileStackNavigation';

const Tab = createBottomTabNavigator();
export const BottomTabNavigation = () => {
  const user = useAppSelector(selectUser);

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
        name="CartStack"
        component={CartStackNavigation}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabItem focused={focused} name="cart" label="Карт" />
          ),
        }}
      />
      {user.status === 'loggedIn' && (
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStackNavigation}
          options={{
            tabBarIcon: ({focused}) => (
              <BottomTabItem
                focused={focused}
                name="account-box"
                label="Профайл"
              />
            ),
          }}
        />
      )}
    </Tab.Navigator>
  );
};
