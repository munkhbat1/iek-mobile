import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SearchBar} from '../components/SearchBar';
import {VerticalCategoryList} from '../components/VerticalCategoryList';
import {globalStyle} from '../globalStyle';

export const CategorySearchScreen = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <VerticalCategoryList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalStyle.colorIvory,
    paddingTop: 15,
  },
  whiteSpace: {
    height: 100,
  },
});
