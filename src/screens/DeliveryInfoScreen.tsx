import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {globalStyle} from '../globalStyle';
import {NoticeModal} from '../modals/NoticeModal';
import {useAppDispatch} from '../redux/hooks';
import {useCreateOrderMutation} from '../redux/services/order';
import {showNoticeModal} from '../redux/slices/noticeModalSlice';
import {deliveryInfoValidator} from '../utils/deliveryInfoValidator';

export const DeliveryInfoScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const dispatch = useAppDispatch();
  const [createOrder, {data, isError, isSuccess}] = useCreateOrderMutation();

  const handleNextButtonClick = () => {
    const [isValid, errorMessage] = deliveryInfoValidator({
      name,
      phone,
      address,
    });

    if (!isValid) {
      dispatch(showNoticeModal(errorMessage));
      return;
    }
    createOrder({
      name,
      phone,
      address,
    });
  };

  if (isError) {
    dispatch(showNoticeModal('Захиалга үүсгэж чадсангүй.'));
  }

  if (isSuccess) {
    navigation.navigate('Payment', {id: data});
  }

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

      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/deliveryIcon.png')}
          style={styles.image}
        />
        <View>
          <Text style={styles.deliveryText}>Хүргэлтийн</Text>
          <Text style={styles.deliveryText}>дэлгэрэнгүй</Text>
          <Text style={styles.deliveryText}>хаяг</Text>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <MaterialCommunityIcons
          name="account-outline"
          size={50}
          color={globalStyle.colorPrimary}
          style={styles.icon}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Хүлээн авах хүний нэр..."
          onChangeText={setName}
        />
      </View>

      <View style={styles.inputContainer}>
        <MaterialCommunityIcons
          name="phone-outline"
          size={50}
          color={globalStyle.colorPrimary}
          style={styles.icon}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Хүлээн авах хүний дугаар..."
          keyboardType="phone-pad"
          textContentType="telephoneNumber"
          autoComplete="tel"
          onChangeText={setPhone}
        />
      </View>

      <TextInput
        style={[styles.textInput, styles.multilineTextInput]}
        placeholder="Дэлгэрэнгүй хаяг..."
        multiline
        onChangeText={setAddress}
      />

      <Pressable style={styles.nextButton} onPress={handleNextButtonClick}>
        <Text style={styles.nextButtonText}>Захиалга үүсгэх</Text>
      </Pressable>
      <NoticeModal />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalStyle.colorIvory,
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
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 100,
    marginLeft: 10,
    marginRight: 10,
  },
  deliveryText: {
    fontSize: 20,
    color: globalStyle.colorPrimary,
    fontWeight: 'bold',
  },
  icon: {
    paddingHorizontal: 10,
  },
  textInput: {
    borderColor: globalStyle.colorPrimary,
    borderWidth: 2,
    height: 35,
    flex: 0.9,
    fontSize: 16,
    paddingLeft: 10,
    borderRadius: 7,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  multilineTextInput: {
    height: 200,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 30,
  },
  nextButton: {
    backgroundColor: globalStyle.colorSecondary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 30,
    marginTop: 80,
    marginBottom: 20,
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderRadius: 5,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
