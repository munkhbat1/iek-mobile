import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Pressable,
  Text,
  Image,
} from 'react-native';
import {Header} from '../components/Header';
import {globalStyle} from '../globalStyle';

export const LoginScreen = () => {
  return (
    <View>
      <Header />
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/logo-white.jpg')}
          style={styles.image}
        />
        <View style={styles.inputContainer}>
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
        </View>
        <Pressable style={styles.loginButton}>
          <Text>Нэвтрэх</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalStyle.colorIvory,
    alignItems: 'center',
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
