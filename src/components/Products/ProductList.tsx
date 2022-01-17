import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useGetProductsQuery} from '../../redux/services/product';
import {ProductCard} from './ProductCard';

export const ProductList = () => {
  const [page] = useState(1);
  const {data} = useGetProductsQuery(page.toString());

  return (
    <FlatList
      data={data?.items}
      renderItem={({item}) => <ProductCard item={item} />}
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
