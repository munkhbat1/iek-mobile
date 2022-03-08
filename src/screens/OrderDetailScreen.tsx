import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {globalStyle} from '../globalStyle';
import {useGetOrderDetailQuery} from '../redux/services/order';
import {OrderStatus} from '../types';

export const OrderDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {orderId} = route.params as {orderId: string};

  const {data} = useGetOrderDetailQuery(orderId);

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

      <View style={styles.orderDetail}>
        <Text>Статус: {data && OrderStatus[data.order.status]}</Text>
        <Text>Захиалагчийн нэр: {data?.order.name}</Text>
        <Text>Захиалагчийн хаяг: {data?.order.address}</Text>
        <Text>Захиалагчийн утас: {data?.order.phone}</Text>
        <Text>
          Захиалагчийн төлсөн дүн: {data?.order.amount.toLocaleString()} &#8366;
        </Text>
      </View>
      <ScrollView style={styles.orderDetail}>
        {data?.orderDetails.map((orderDetail, idx) => {
          return (
            <View key={orderDetail.id} style={styles.product}>
              <Text>No: {idx + 1}</Text>
              <Text>Бүтээгдэхүүний нэр: {orderDetail.productName}</Text>
              <Text>
                Нэгж үнэ: {orderDetail.unitPrice.toLocaleString()} &#8366;
              </Text>
              <Text>Тоо ширхэг: {orderDetail.quantity}</Text>
              <Text>Шаардлага: {orderDetail.requirement}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalStyle.colorIvory,
    flex: 1,
  },
  backButton: {
    paddingLeft: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  backButtonText: {
    color: globalStyle.colorPrimary,
    fontWeight: '500',
    marginLeft: 7,
  },
  orderDetail: {
    padding: 10,
  },
  productList: {
    padding: 10,
  },
  product: {
    paddingTop: 5,
  },
});
