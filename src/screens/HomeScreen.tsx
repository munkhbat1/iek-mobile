import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HomeImageSlider} from '../components/HomeImageSlider';
import {HorizontalCategoryList} from '../components/HorizontalCategoryList';
import {ProductList} from '../components/Products/ProductList';
import {globalStyle} from '../globalStyle';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeImageSlider />
      <HorizontalCategoryList />
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
