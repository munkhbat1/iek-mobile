import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import VectorImage from 'react-native-vector-image';

export const CategorySearchScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Category Screen</Text>
      <VectorImage
        source={require('../../assets/images/untraalga.svg')}
        style={styles.headerIcon}
      />
      <VectorImage
        source={require('../../assets/images/sambar.svg')}
        style={styles.headerIcon}
      />
      <VectorImage
        source={require('../../assets/images/gereltuuleg.svg')}
        style={styles.headerIcon}
      />
      <VectorImage
        source={require('../../assets/images/cable.svg')}
        style={styles.headerIcon}
      />
      <VectorImage
        source={require('../../assets/images/avtomat-tasluur.svg')}
        style={styles.headerIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerIcon: {
    width: 80,
    height: 80,
    backgroundColor: 'red',
  },
});
