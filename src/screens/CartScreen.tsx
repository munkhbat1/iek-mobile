import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {CartItem} from '../components/CartItem';
import {globalStyle} from '../globalStyle';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {removeAllItems, selectCart} from '../redux/slices/cartSlice';
import {CartItemType} from '../types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {selectUser} from '../redux/slices/userSlice';
import {NoticeModal} from '../modals/NoticeModal';
import {showNoticeModal} from '../redux/slices/noticeModalSlice';
import {useNavigation} from '@react-navigation/native';

export const CartScreen = () => {
  const navigation = useNavigation();
  const cartItems = useAppSelector(selectCart);
  const dispatch = useAppDispatch();
  const calcItemTotalPrice = (cartItem: CartItemType) => {
    let totalPrice = cartItem.quantity * cartItem.unitPrice;
    totalPrice = totalPrice - (totalPrice * cartItem.discountPercent) / 100;
    return totalPrice;
  };
  const user = useAppSelector(selectUser);

  if (cartItems.length === 0) {
    return (
      <View style={styles.emptyScreen}>
        <MaterialCommunityIcons
          name="cart-remove"
          size={250}
          style={styles.emptyScreenIcon}
        />
        <Text style={styles.emptyScreenText}>Таны карт хоосон байна.</Text>
      </View>
    );
  }

  const handleRemoveAllItems = () => {
    dispatch(removeAllItems());
  };

  const handlePayment = () => {
    if (user.status !== 'loggedIn') {
      dispatch(showNoticeModal('Та худалдан авахын тулд эхлээд нэвтэрнэ үү.'));
      return;
    }
    navigation.navigate('DeliveryInfo');
  };

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

      <View style={styles.totalPriceWrapper}>
        <Text style={styles.totalPriceText}>
          Төлөх дүн:{' '}
          {cartItems
            .reduce((acc, cartItem) => acc + calcItemTotalPrice(cartItem), 0)
            .toLocaleString()}
          ₮
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={handleRemoveAllItems}>
          <Text style={styles.buttonText}>Цуцлах</Text>
        </Pressable>
        <Pressable
          style={[styles.button, {backgroundColor: 'green'}]}
          onPress={handlePayment}>
          <Text style={styles.buttonText}>Төлөх</Text>
        </Pressable>
      </View>
      <NoticeModal />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalStyle.colorIvory,
    flex: 1,
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
    backgroundColor: globalStyle.colorIvory,
  },
  emptyScreenIcon: {
    color: globalStyle.colorPrimary,
  },
  emptyScreenText: {
    color: 'black',
    fontSize: 17,
  },
  yourOrderText: {
    textAlign: 'center',
    color: globalStyle.colorPrimary,
    fontWeight: 'bold',
    fontSize: 22,
    marginVertical: 10,
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: globalStyle.colorShuttleGrey,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: globalStyle.colorIvory,
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  totalPriceWrapper: {
    alignItems: 'flex-end',
    marginRight: 45,
    marginBottom: 15,
    marginTop: 18,
  },
  totalPriceText: {
    color: '#000000',
    fontSize: 18,
  },
});
