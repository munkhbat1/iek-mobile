import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {globalStyle} from '../globalStyle';

export const DeliveryInfoScreen = () => {
  const navigation = useNavigation();

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
        />
      </View>

      <TextInput
        style={[styles.textInput, styles.multilineTextInput]}
        placeholder="Дэлгэрэнгүй хаяг..."
        multiline
      />

      <Pressable style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Банк сонгох</Text>
      </Pressable>
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
