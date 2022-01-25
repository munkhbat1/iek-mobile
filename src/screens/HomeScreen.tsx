import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {HomeImageSlider} from '../components/HomeImageSlider';
import {HorizontalCategoryList} from '../components/HorizontalCategoryList';
import {ProductList} from '../components/Products/ProductList';
import {globalStyle} from '../globalStyle';

export const HomeScreen = () => {
  const [category, setCategory] = useState('');

  return (
    <View style={styles.container}>
      <HomeImageSlider />
      <HorizontalCategoryList setCategory={setCategory} />
      <ProductList category={category} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalStyle.colorIvory,
    flex: 1,
  },
});
