import React from 'react';
import {View, Text} from 'react-native';
import Config from 'react-native-config';

export const SpecialScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Special Screen</Text>
      <Text>{Config.API_URI}</Text>
    </View>
  );
};
