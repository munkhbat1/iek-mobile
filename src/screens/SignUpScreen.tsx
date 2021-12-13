import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Pressable,
  Text,
  Image,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Header} from '../components/Header';
import {globalStyle} from '../globalStyle';

export const SignUpScreen = () => {
  return (
    <View>
      <Header />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}>
        <Image
          source={require('../../assets/images/logo-white.jpg')}
          style={styles.image}
        />
        <View style={styles.inputContainer}>
          <TextInput placeholder="Овог" style={styles.input} />
          <TextInput placeholder="Нэр" style={styles.input} />
          <TextInput
            placeholder="Утас"
            style={styles.input}
            keyboardType="phone-pad"
            textContentType="telephoneNumber"
            autoComplete="tel"
          />
          <TextInput
            placeholder="И-мэйл"
            style={styles.input}
            autoComplete="email"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <TextInput
            placeholder="Нууц үг"
            style={styles.input}
            secureTextEntry={true}
            autoComplete="password"
            textContentType="password"
          />
          <TextInput
            placeholder="Нууц үг баталгаажуулах"
            style={styles.input}
            secureTextEntry={true}
            autoComplete="password-new"
            textContentType="newPassword"
          />
        </View>
        <Pressable style={styles.loginButton}>
          <Text>Бүртгүүлэх</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    alignItems: 'center',
  },
  container: {
    backgroundColor: globalStyle.colorIvory,
    height: '100%',
  },
  input: {
    borderWidth: 2,
    width: 300,
    height: 40,
    borderRadius: 10,
    borderColor: globalStyle.colorPrimary,
    paddingLeft: 10,
    marginBottom: 15,
  },
  inputContainer: {
    marginBottom: 20,
  },
  loginButton: {
    height: 40,
    width: 150,
    borderRadius: 20,
    backgroundColor: globalStyle.colorSecondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
});
