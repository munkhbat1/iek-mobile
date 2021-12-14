import React, {FC} from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import {globalStyle} from '../../globalStyle';

export const ProductCard: FC<ProductCardProps> = ({item}) => {
  return (
    <Pressable style={styles.cardContainer}>
      <Text>${item}asd</Text>
    </Pressable>
  );
};

type ProductCardProps = {
  item: number;
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    marginLeft: 20,
    flex: 0.5,
    aspectRatio: 1 / 1.3,
    marginVertical: 10,
    borderRadius: 8,
    elevation: 5,
    shadowColor: globalStyle.colorSecondary,
    shadowOffset: {width: 5, height: 5},
    shadowRadius: 5,
    shadowOpacity: 30,
  },
});
