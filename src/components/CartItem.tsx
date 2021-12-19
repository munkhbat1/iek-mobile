import React, {FC} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {globalStyle} from '../globalStyle';
import {CartItemType} from '../types';

export const CartItem: FC<CartItemProps> = ({cartItem, calcItemTotalPrice}) => {
  return (
    <View style={styles.cartItem}>
      <Image
        source={require('../../assets/images/product-image.png')}
        style={styles.image}
      />
      <View style={styles.desc}>
        <Text style={styles.productName}>{cartItem.productName}</Text>
        <View style={styles.horizontalLine} />
        <View style={styles.horizontalText}>
          <View>
            <Text>Тоо ширхэг: </Text>
            <Text>Нэгж үнэ: </Text>
            <Text>Хямдрал: </Text>
            <Text>Шаардлага: </Text>
          </View>
          <View>
            <Text>{cartItem.quantity}</Text>
            <Text>{cartItem.unitPrice.toLocaleString()}₮</Text>
            <Text>{cartItem.discountPercent}%</Text>
            <Text style={styles.optionText}>{cartItem.option}</Text>
          </View>
        </View>
        <View style={styles.totalContainer}>
          <Text>
            Нийт үнэ: {calcItemTotalPrice(cartItem).toLocaleString()}₮
          </Text>
          <View style={styles.horizontalButtons}>
            <Pressable style={styles.button}>
              <Text style={[{color: globalStyle.colorIvory}]}>Харах</Text>
            </Pressable>
            <Pressable style={[styles.button, {backgroundColor: 'red'}]}>
              <Text
                style={[
                  {color: globalStyle.colorIvory, backgroundColor: 'red'},
                ]}>
                Устгах
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

type CartItemProps = {
  cartItem: CartItemType;
  calcItemTotalPrice: (T: CartItemType) => number;
};

const styles = StyleSheet.create({
  cartItem: {
    height: 160,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: globalStyle.colorGainsboro,
    paddingVertical: 5,
    borderRadius: 5,
  },
  image: {
    height: '90%',
    resizeMode: 'contain',
    width: '15%',
    marginHorizontal: 10,
  },
  productName: {
    color: globalStyle.colorPrimary,
    fontWeight: 'bold',
  },
  horizontalLine: {
    height: 3,
    backgroundColor: globalStyle.colorShuttleGrey,
    marginVertical: 3,
  },
  horizontalText: {
    flexDirection: 'row',
  },
  totalContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  horizontalButtons: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  button: {
    width: 55,
    backgroundColor: globalStyle.colorShuttleGrey,
    alignItems: 'center',
    marginHorizontal: 4,
    padding: 5,
    borderRadius: 5,
  },
  desc: {
    width: '75%',
  },
  optionText: {
    width: '75%',
  },
});
