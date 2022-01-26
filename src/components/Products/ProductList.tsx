import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useGetProductsQuery} from '../../redux/services/product';
import {ProductListItem} from '../../types';
import {ProductCard} from './ProductCard';
import {globalStyle} from '../../globalStyle';
import {useAppSelector} from '../../redux/hooks';
import {selectCategory} from '../../redux/slices/homeSlice';

export const ProductList = () => {
  const [page, setPage] = useState(1);
  const category = useAppSelector(selectCategory);
  const {data, isSuccess, isFetching, isLoading} = useGetProductsQuery([
    page.toString(),
    category,
  ]);
  const [renderItems, setRenderItems] = useState<ProductListItem[]>([]);

  // if category changed
  useEffect(() => {
    setRenderItems(() => []);
    setPage(1);
  }, [category]);

  // if scroll reload or initial reload
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
