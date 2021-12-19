import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Header} from '../components/Header';
import {globalStyle} from '../globalStyle';

export const FAQScreen = () => {
  return (
    <>
      <Header />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.appName}>ЭЛЕКТРОМОНТАЖ</Text>
          <Text style={styles.screenTitle}>Түгээмэл асуулт хариулт</Text>
          <Text style={styles.heading}>1. Ямар үед бараа буцаах вэ?</Text>
          <Text style={styles.paragraph}>
            Хэрэв таны сонгосон бараа үйлдвэрийн ямар нэгэн гэмтэлтэй байвал
            Electromontaj-ийн зүгээс үнэ төлбөргүй солиж өгөх үүргэтэй.
          </Text>
          <View style={styles.whiteSpace} />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  appName: {
    textAlign: 'center',
    color: globalStyle.colorSecondary,
    fontWeight: '500',
    fontSize: 28,
    marginTop: 10,
  },
  container: {
    paddingHorizontal: 30,
    backgroundColor: globalStyle.colorIvory,
  },
  screenTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10,
    color: globalStyle.colorPrimary,
  },
  whiteSpace: {
    height: 700,
  },
  heading: {
    fontSize: 16,
    marginVertical: 5,
    fontWeight: 'bold',
    color: globalStyle.colorPrimary,
  },
  paragraph: {
    marginVertical: 5,
    color: globalStyle.colorPrimary,
  },
});
