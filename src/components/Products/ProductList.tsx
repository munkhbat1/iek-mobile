import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useGetProductsQuery} from '../../redux/services/product';
import {ProductListItem} from '../../types';
import {ProductCard} from './ProductCard';
import {globalStyle} from '../../globalStyle';

export const ProductList = () => {
  const [page, setPage] = useState(1);
  const {data, isSuccess, isFetching, isLoading} = useGetProductsQuery(page.toString());
  const [renderItems, setRenderItems] = useState<ProductListItem[]>([]);

  useEffect(() => {
    if (!isFetching && isSuccess) {
      setRenderItems(prevRenderItems => [...prevRenderItems, ...data?.items]);
    }
  }, [isSuccess, data?.items, isFetching]);

  const onEndReached = () => {
    if (data?.total_pages && data?.total_pages > page) {
      setPage(prevPage => prevPage + 1);
    }
  };

  return (
    <>
      <FlatList
        data={renderItems}
        renderItem={({item}) => <ProductCard item={item} />}
        keyExtractor={(_, idx) => `${idx}`}
        numColumns={2}
        style={styles.listContainer}
        contentContainerStyle={containerStyle.listContainer}
        onEndReached={onEndReached}
        onEndReachedThreshold={-0.1}
      />
      {isFetching ? (
        <ActivityIndicator size={'large'} color={globalStyle.colorSecondary} />
      ) : isFetching && isLoading ? (
        <ActivityIndicator size={'large'} color={globalStyle.colorSecondary} />
      ) : (
        <></>
      )}
    </>
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
