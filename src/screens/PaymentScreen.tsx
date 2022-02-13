import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {BankButton} from '../components/BankButton';
import {globalStyle} from '../globalStyle';
import QRCode from 'react-native-qrcode-svg';
import {useGetOrderQuery} from '../redux/services/order';

export const PaymentScreen = () => {
  const navigation = useNavigation();
  const [isBank, setIsBank] = useState(true);
  const route = useRoute();
  const {id}: {id: number} = route.params;

  const {data: order} = useGetOrderQuery(id);

  const handleRadioButton = () => {
    setIsBank(state => !state);
  };

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
          <BankButton
            name="Хаан банк"
            img="khanbank"
            url={
              (order &&
                order.urls
                  .filter(url => url.name === 'Khan bank')
                  .map(url => url.link)[0]) ||
              ''
            }
          />
          <BankButton
            name="Худалдаа хөгжлийн банк"
            img="tdbbank"
            url={
              (order &&
                order.urls
                  .filter(url => url.name === 'Trade and Development bank')
                  .map(url => url.link)[0]) ||
              ''
            }
          />
          <BankButton
            name="Хас банк"
            img="xacbank"
            url={
              (order &&
                order.urls
                  .filter(url => url.name === 'Xac bank')
                  .map(url => url.link)[0]) ||
              ''
            }
          />
          <BankButton
            name="Төрийн банк"
            img="statebank"
            url={
              (order &&
                order.urls
                  .filter(url => url.name === 'State bank')
                  .map(url => url.link)[0]) ||
              ''
            }
          />
        </View>
      ) : (
        <View style={styles.qrContainer}>
          <QRCode value={order && order.qr_text} size={200} />
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
