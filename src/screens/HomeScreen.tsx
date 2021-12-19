import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HorizontalIconCategory} from '../components/HorizontalIconCategory';
import {ProductList} from '../components/Products/ProductList';
import {globalStyle} from '../globalStyle';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HorizontalIconCategory />
      <ProductList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalStyle.colorIvory,
    flex: 1,
  },
});
