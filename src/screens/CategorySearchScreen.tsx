import React from 'react';
import {View, Text, Image} from 'react-native';

export const CategorySearchScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Category Screen</Text>
      <Image source={require('../../assets/images/splash.png')} />
    </View>
  );
};
