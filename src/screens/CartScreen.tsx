import React from 'react';
import {View, Text} from 'react-native';
import {useAppSelector} from '../redux/hooks';
import {selectCart} from '../redux/slices/cartSlice';

export const CartScreen = () => {
  const cartItems = useAppSelector(selectCart);
  if (cartItems.length === 0) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}>
        <Text>Таны карт хоосон байна.</Text>
      </View>
    );
  }

  return (
    <View>
      {cartItems.map((cartItem, idx) => {
        return (
          <View key={idx}>
            <Text>${cartItem.productId}</Text>
            <Text>${cartItem.productName}</Text>
          </View>
        );
      })}
    </View>
  );
};
