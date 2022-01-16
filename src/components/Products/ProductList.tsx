import React from 'react';
import {StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {ProductCard} from './ProductCard';

export const ProductList = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <FlatList
      data={data}
      renderItem={item => <ProductCard item={item} />}
      keyExtractor={(_, idx) => `${idx}`}
      numColumns={2}
      style={styles.listContainer}
      contentContainerStyle={containerStyle.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingRight: 20,
  },
});

const containerStyle = StyleSheet.create({
  listContainer: {
    paddingBottom: 30,
  },
});
