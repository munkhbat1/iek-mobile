import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {ProductListItem} from '../../types';
import {ProductCard} from './ProductCard';

export const BaseProductList: FC<SearchProductListProps> = ({renderItems}) => {
  return (
    <>
      <FlatList
        data={renderItems}
        renderItem={({item}) => <ProductCard item={item} />}
        keyExtractor={(_, idx) => `${idx}`}
        numColumns={2}
        style={styles.listContainer}
        contentContainerStyle={containerStyle.listContainer}
      />
    </>
  );
};

type SearchProductListProps = {
  renderItems: ProductListItem[];
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
