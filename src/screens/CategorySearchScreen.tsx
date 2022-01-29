import React, {useState} from 'react';
import {View, StyleSheet, Text, ActivityIndicator} from 'react-native';
import {BaseProductList} from '../components/Products/BaseProductList';
import {SearchBar} from '../components/SearchBar';
import {VerticalCategoryList} from '../components/VerticalCategoryList';
import {globalStyle} from '../globalStyle';
import {useSearchProductMutation} from '../redux/services/product';

export const CategorySearchScreen = () => {
  const [keyword, setKeyword] = useState('');
  const [searchProduct, {data: products, isLoading, isError}] =
    useSearchProductMutation();

  return (
    <View style={styles.container}>
      <SearchBar
        searchProduct={searchProduct}
        keyword={keyword}
        setKeyword={setKeyword}
      />
      {products && products?.length > 0 ? (
        <BaseProductList renderItems={products} />
      ) : keyword !== '' && products?.length === 0 ? (
        <Text>Бүтээгдэхүүн олдсонгүй.</Text>
      ) : isLoading ? (
        <ActivityIndicator size={'large'} color={globalStyle.colorSecondary} />
      ) : isError ? (
        <Text>Алдаа гарлаа.</Text>
      ) : (
        <VerticalCategoryList />
      )}
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
