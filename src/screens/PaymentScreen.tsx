import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {globalStyle} from '../globalStyle';

export const PaymentScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>ЭЛЕКТРОМОНТАЖ</Text>
      <Text style={styles.emptyScreenText}>Payment</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalStyle.colorIvory,
  },
  appName: {
    textAlign: 'center',
    color: globalStyle.colorSecondary,
    fontWeight: '500',
    fontSize: 28,
    marginTop: 10,
  },
  emptyScreenText: {
    color: 'black',
    fontSize: 17,
    alignSelf: 'center',
    height: '100%',
    marginVertical: 250,
  },
});
