import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {CartItem} from '../components/CartItem';
import {globalStyle} from '../globalStyle';
import {useAppSelector} from '../redux/hooks';
import {selectCart} from '../redux/slices/cartSlice';
import {CartItemType} from '../types';

export const CartScreen = () => {
  const cartItems = useAppSelector(selectCart);

  const calcItemTotalPrice = (cartItem: CartItemType) => {
    let totalPrice = cartItem.quantity * cartItem.unitPrice;
    totalPrice = totalPrice - (totalPrice * cartItem.discountPercent) / 100;
    return totalPrice;
  };

  if (cartItems.length === 0) {
    return (
      <View style={styles.emptyScreen}>
        <Text>Таны карт хоосон байна.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>ЭЛЕКТРОМОНТАЖ</Text>
      <Text style={styles.yourOrderText}>ТАНЫ ЗАХИАЛГА</Text>
      <FlatList
        data={cartItems}
        renderItem={({item}) => (
          <CartItem cartItem={item} calcItemTotalPrice={calcItemTotalPrice} />
        )}
        keyExtractor={(_, idx) => idx.toString()}
        style={styles.cartItemContainer}
      />
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
  cartItemContainer: {
    height: '70%',
    marginHorizontal: 10,
  },
  emptyScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  yourOrderText: {
    textAlign: 'center',
    color: globalStyle.colorPrimary,
    fontWeight: 'bold',
    fontSize: 22,
    marginVertical: 10,
  },
});
