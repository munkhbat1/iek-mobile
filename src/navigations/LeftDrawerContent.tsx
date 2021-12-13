import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {globalStyle} from '../globalStyle';

export const LeftDrawerContent = () => {
  return (
    <DrawerContentScrollView>
      <View style={styles.drawerHeader}>
        <Text>asd</Text>
      </View>
      <View>
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
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    flex: 1,
  },
  drawerItemText: {
    color: 'black',
  },
});
