import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {BankButton} from '../components/BankButton';
import {globalStyle} from '../globalStyle';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {getOrder, selectOrder} from '../redux/slices/orderSlice';
import {selectUser} from '../redux/slices/userSlice';
import QRCode from 'react-native-qrcode-svg';

export const PaymentScreen = () => {
  const navigation = useNavigation();
  const [isBank, setIsBank] = useState(true);
  const dispatch = useAppDispatch();
  const order = useAppSelector(selectOrder);
  const user = useAppSelector(selectUser);

  const handleRadioButton = () => {
    setIsBank(state => !state);
  };

  useEffect(() => {
    console.log(user);
    dispatch(getOrder(user)).unwrap().then(console.log).catch(console.log);
    console.log(order.qrCode);
  }, [dispatch, order, user]);

  return (
    <ScrollView style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={globalStyle.headerIconSize}
          color={globalStyle.colorPrimary}
        />
        <Text style={styles.backButtonText}>Буцах</Text>
      </Pressable>
      <View style={styles.radioButtonContainer}>
        <Pressable
          style={[styles.radioButton, isBank && styles.activeRadioButton]}
          onPress={handleRadioButton}>
          <Text style={styles.radioButtonText}>Банк сонгох</Text>
        </Pressable>
        <Pressable
          style={[
            styles.radioButton,
            styles.lastRadioButton,
            !isBank && styles.activeRadioButton,
          ]}
          onPress={handleRadioButton}>
          <Text style={styles.radioButtonText}>QR код</Text>
        </Pressable>
      </View>

      {isBank ? (
        <View style={styles.buttons}>
          <BankButton name="Хаан банк" img="khanbank" url="" />
          <BankButton name="Худалдаа хөгжлийн банк" img="tdbbank" url="" />
          <BankButton name="Хас банк" img="xacbank" url="" />
          <BankButton name="Төрийн банк" img="statebank" url="" />
        </View>
      ) : (
        <View style={styles.qrContainer}>
          <QRCode value={order.qrCode} size={200} />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalStyle.colorIvory,
  },
  emptyScreenText: {
    color: 'black',
    fontSize: 17,
    alignSelf: 'center',
    height: '100%',
    marginVertical: 250,
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
  buttons: {
    alignItems: 'center',
  },
  radioButtonContainer: {
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  radioButton: {
    borderWidth: 2,
    borderColor: globalStyle.colorPrimary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 0.4,
    alignItems: 'center',
  },
  lastRadioButton: {
    borderLeftWidth: 0,
  },
  radioButtonText: {
    color: globalStyle.colorPrimary,
    fontSize: 16,
    fontWeight: '500',
  },
  activeRadioButton: {
    backgroundColor: globalStyle.colorSecondary,
  },
  qrContainer: {
    alignSelf: 'center',
    marginTop: 30,
  },
});
