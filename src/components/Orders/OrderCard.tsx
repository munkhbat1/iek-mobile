import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {Text, StyleSheet, Pressable, View} from 'react-native';
import {globalStyle} from '../../globalStyle';
import {OrderListItem, OrderStatus} from '../../types';

export const OrderCard: FC<OrderCardProps> = ({item}) => {
  const navigation = useNavigation();

  const onPressHandler = () => {
    navigation.navigate('OrderDetail', {orderId: item.id});
  };

  return (
    <Pressable style={styles.cardContainer} onPress={onPressHandler}>
      <View style={styles.textContainer}>
        <View style={styles.name}>
          <Text style={styles.nameText}>{OrderStatus[item.status]}</Text>
        </View>
        <Text style={styles.price}>{item.amount.toLocaleString()}₮</Text>
        <Text style={styles.price}>Захиалгын ID: {item.id}</Text>
        <Text style={styles.price}>
          Үүсгэсэн хугацаа:{' '}
          {`${item.createdAt.split('T')[0]} ${
            item.createdAt.split('T')[1].split('.')[0]
          }`}
        </Text>
      </View>
    </Pressable>
  );
};

type OrderCardProps = {
  item: OrderListItem;
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    marginLeft: 20,
    flex: 0.5,
    marginVertical: 10,
    borderRadius: 8,
    elevation: 5,
    shadowColor: globalStyle.colorSecondary,
    shadowOffset: {width: 5, height: 5},
    shadowRadius: 5,
    shadowOpacity: 30,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  image: {
    flex: 0.6,
    width: 130,
    alignSelf: 'center',
    marginTop: 10,
  },
  price: {
    color: globalStyle.colorPrimary,
    fontWeight: 'bold',
    flex: 0.3,
  },
  textContainer: {
    paddingHorizontal: 10,
    flex: 0.4,
  },
  name: {
    flex: 0.7,
    justifyContent: 'center',
  },
  nameText: {
    color: 'black',
  },
});
