import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {globalStyle} from '../globalStyle';
import {StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const BottomTabItem: FC<BottomTypeProps> = ({focused, name, label}) => {
  const size = focused
    ? globalStyle.bottomTabActiveIconSize
    : globalStyle.bottomTabInactiveIconSize;
  const color = focused ? globalStyle.colorIvory : globalStyle.colorShuttleGrey;
  return (
    <View style={styles.tabBarItemContainer}>
      <MaterialCommunityIcons name={name} size={size} color={color} />
      {focused && <Text style={styles.tabBarItemText}>{label}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarItemText: {
    color: globalStyle.colorIvory,
    fontSize: 12,
  },
});

type BottomTypeProps = {
  focused: boolean;
  name: string;
  label: string;
};
