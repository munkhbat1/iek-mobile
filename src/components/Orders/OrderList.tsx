import React, {useEffect, useState} from 'react';
import {ActivityIndicator, RefreshControl, StyleSheet} from 'react-native';
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
  const [isRefreshing, setIsRefreshing] = useState(false);
  const payload: any = jwt_decode(useAppSelector(selectUser).jwt);
  const userId = payload.sub;

  const {data, isSuccess, isFetching, isLoading, refetch} = useGetOrdersQuery([
    page.toString(),
    userId,
  ]);

  const [renderItems, setRenderItems] = useState<OrderListItem[]>([]);

  // if scroll reload or initial reload
  useEffect(() => {
    if (!isFetching && isSuccess) {
      setIsRefreshing(false);
      setRenderItems(prevRenderItems => [...prevRenderItems, ...data?.items]);
    }
  }, [isSuccess, data?.items, isFetching]);

  const onEndReached = () => {
    if (data?.total_pages && data?.total_pages > page) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const onRefresh = () => {
    setIsRefreshing(true);
    setPage(1);
    setRenderItems([]);
    refetch();
  };

  return (
    <>
      <FlatList
        data={renderItems}
        renderItem={({item}) => <OrderCard item={item} />}
        keyExtractor={item => `${item.id}`}
        numColumns={1}
        style={styles.listContainer}
        contentContainerStyle={containerStyle.listContainer}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.01}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
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
