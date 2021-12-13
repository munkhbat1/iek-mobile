import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React from 'react';
import {Linking, Pressable, StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {globalStyle} from '../globalStyle';

export const LeftDrawerContent = () => {
  return (
    <DrawerContentScrollView>
      <View style={styles.drawerItems}>
        <DrawerItem
          label={() => {
            return <Text style={styles.drawerItemText}>Нүүр</Text>;
          }}
          icon={() => {
            return (
              <MaterialCommunityIcons
                name="home"
                color={globalStyle.colorSecondary}
                size={globalStyle.leftDrawerIconSize}
              />
            );
          }}
          onPress={() => console.log('Pressed: Left drawer Main')}
        />
        <DrawerItem
          label={() => {
            return <Text style={styles.drawerItemText}>Холбоо барих</Text>;
          }}
          icon={() => {
            return (
              <MaterialCommunityIcons
                name="bookmark"
                color={globalStyle.colorSecondary}
                size={globalStyle.leftDrawerIconSize}
              />
            );
          }}
          onPress={() => console.log('Pressed: Left drawer Contact')}
        />
        <DrawerItem
          label={() => {
            return <Text style={styles.drawerItemText}>Нэвтрэх</Text>;
          }}
          icon={() => {
            return (
              <MaterialCommunityIcons
                name="login"
                color={globalStyle.colorSecondary}
                size={globalStyle.leftDrawerIconSize}
              />
            );
          }}
          onPress={() => console.log('Pressed: Left drawer Login')}
        />
        <DrawerItem
          label={() => {
            return <Text style={styles.drawerItemText}>Бүртгүүлэх</Text>;
          }}
          icon={() => {
            return (
              <MaterialCommunityIcons
                name="account-plus"
                color={globalStyle.colorSecondary}
                size={globalStyle.leftDrawerIconSize}
              />
            );
          }}
          onPress={() => console.log('Pressed: Left drawer Sign Up')}
        />
      </View>

      <View style={styles.drawerFooter}>
        <Pressable onPress={() => Linking.openURL('tel:70152828')}>
          <Text style={styles.drawerFooterPhone}>7015 2828</Text>
        </Pressable>
        <Text style={styles.drawerFooterText}>
          УБ, Баянгол дүүрэг-1808, 20-р хороо Үйлдвэрийн баруун бүс, Москвагийн
          гудамж-9,Эндлесс төв
        </Text>

        <Pressable
          style={styles.drawerFooterEmail}
          onPress={() => Linking.openURL('mailto:info@Iek.mn')}>
          <Text style={styles.drawerFooterText}>info@Iek.mn</Text>
        </Pressable>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerItems: {
    flex: 1,
  },
  drawerItemText: {
    color: 'black',
  },
  drawerFooter: {
    alignItems: 'center',
  },
  drawerFooterText: {
    textAlign: 'center',
    color: globalStyle.colorShuttleGrey,
  },
  drawerFooterEmail: {
    marginTop: 15,
  },
  drawerFooterPhone: {
    color: globalStyle.colorSecondary,
    marginVertical: 15,
    fontWeight: 'bold',
  },
});
