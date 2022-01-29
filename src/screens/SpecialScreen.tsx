import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BaseProductList} from '../components/Products/BaseProductList';
import {globalStyle} from '../globalStyle';
import {useGetSpecialProductsQuery} from '../redux/services/product';

export const SpecialScreen = () => {
  const {data: products} = useGetSpecialProductsQuery();

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>ЭЛЕКТРОМОНТАЖ</Text>
      {!products || products.length === 0 ? (
        <Text style={styles.emptyScreenText}>
          Онцлох бүтээгдэхүүн байхгүй байна
        </Text>
      ) : (
        <BaseProductList renderItems={products} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalStyle.colorIvory,
  },
  appName: {
    textAlign: 'center',
    color: globalStyle.colorSecondary,
    fontWeight: '500',
    fontSize: 28,
    marginTop: 10,
  },
  emptyScreenText: {
    color: 'black',
    fontSize: 17,
    alignSelf: 'center',
    height: '100%',
    marginVertical: 250,
  },
});
