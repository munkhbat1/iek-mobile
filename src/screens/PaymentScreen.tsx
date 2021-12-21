import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {BankButton} from '../components/BankButton';
import {globalStyle} from '../globalStyle';

export const PaymentScreen = () => {
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
      <Text style={styles.appName}>ЭЛЕКТРОМОНТАЖ</Text>
      <View style={styles.buttons}>
        <BankButton name="Хаан банк" img="khanbank" url="" />
        <BankButton name="Худалдаа хөгжлийн банк" img="tdbbank" url="" />
        <BankButton name="Хас банк" img="xacbank" url="" />
        <BankButton name="Төрийн банк" img="statebank" url="" />
      </View>
    </ScrollView>
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
});
