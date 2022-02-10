import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  ActivityIndicator,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {IEKBizCategoryList} from '../components/IEKBizCategoryList';
import {IEKBizItem} from '../components/IEKBizItem';
import {globalStyle} from '../globalStyle';
import {useAppSelector} from '../redux/hooks';
import {useGetBlogsQuery} from '../redux/services/blog';
import {selectType} from '../redux/slices/blog';
import {BlogListItem} from '../types';

export const IEKBizScreen = () => {
  const navigation = useNavigation();
  const [page, setPage] = useState(1);
  const type = useAppSelector(selectType);
  const {data, isSuccess, isFetching, isLoading} = useGetBlogsQuery([
    page.toString(),
    type,
  ]);
  const [renderItems, setRenderItems] = useState<BlogListItem[]>([]);

  // if category changed
  useEffect(() => {
    setRenderItems(() => []);
    setPage(1);
  }, [type]);

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
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={globalStyle.headerIconSize}
          color={globalStyle.colorPrimary}
        />
        <Text style={styles.backButtonText}>Буцах</Text>
      </Pressable>
      <IEKBizCategoryList />

      <FlatList
        data={renderItems}
        renderItem={({item}) => <IEKBizItem item={item} />}
        keyExtractor={(_, idx) => `${idx}`}
        numColumns={1}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalStyle.colorIvory,
  },
  backButton: {
    paddingLeft: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonText: {
    color: globalStyle.colorPrimary,
    fontWeight: '500',
    marginLeft: 7,
  },
  listContainer: {
    marginHorizontal: 10,
  },
});

const containerStyle = StyleSheet.create({
  listContainer: {
    paddingBottom: 100,
    minHeight: '100%',
  },
});
