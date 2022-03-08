import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {OrderListItem} from '../../types';
import {globalStyle} from '../../globalStyle';
import jwt_decode from 'jwt-decode';
import {useAppSelector} from '../../redux/hooks';
import {selectUser} from '../../redux/slices/userSlice';
import {useGetOrdersQuery} from '../../redux/services/order';
import {OrderCard} from './OrderCard';

export const OrderList = () => {
  const [page, setPage] = useState(1);
  const payload: any = jwt_decode(useAppSelector(selectUser).jwt);
  const userId = payload.sub;

  const {data, isSuccess, isFetching, isLoading} = useGetOrdersQuery([
    page.toString(),
    userId,
  ]);

  const [renderItems, setRenderItems] = useState<OrderListItem[]>([]);

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
        renderItem={({item}) => <OrderCard item={item} />}
        keyExtractor={(_, idx) => `${idx}`}
        numColumns={1}
        style={styles.listContainer}
        contentContainerStyle={containerStyle.listContainer}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.01}
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
    paddingRight: 30,
  },
});

const containerStyle = StyleSheet.create({
  listContainer: {
    paddingBottom: 30,
  },
});
