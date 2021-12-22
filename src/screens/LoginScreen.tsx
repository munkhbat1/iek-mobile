import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Pressable,
  Text,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Header} from '../components/Header';
import {globalStyle} from '../globalStyle';
import {LoadingModal} from '../modals/LoadingModal';
import {LogInSucceedModal} from '../modals/LogInSucceedModal';
import {NoticeModal} from '../modals/NoticeModal';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {
  hideLogInSucceedModal,
  showLogInSucceedModal,
} from '../redux/slices/logInSucceedModalSlice';
import {showNoticeModal} from '../redux/slices/noticeModalSlice';
import {logIn, selectUser} from '../redux/slices/userSlice';
import {loginValidator} from '../utils/loginValidator';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const navigation = useNavigation();

  const handleLogin = () => {
    const [isValid, errorMessage] = loginValidator({
      email,
      password,
    });

    if (!isValid) {
      dispatch(showNoticeModal(errorMessage));
      return;
    }

    dispatch(
      logIn({
        email,
        password,
      }),
    )
      .unwrap()
      .then(() =>
        dispatch(
          showLogInSucceedModal({
            message: 'Амжилттай нэвтэрлээ',
            logInSucceed: true,
          }),
        ),
      )
      .catch(() =>
        dispatch(
          showLogInSucceedModal({
            message: 'Нэвтэрч чадсангүй',
            logInSucceed: false,
          }),
        ),
      );
  };

  return (
    <View>
      <Header />
      <KeyboardAvoidingView>
        <ScrollView contentContainerStyle={styles.container}>
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
              onChangeText={setEmail}
            />
            <TextInput
              placeholder="Нууц үг"
              style={styles.input}
              secureTextEntry={true}
              autoComplete="password"
              textContentType="password"
              onChangeText={setPassword}
            />
          </View>
          <Pressable style={styles.loginButton} onPress={handleLogin}>
            <Text>Нэвтрэх</Text>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
      <NoticeModal />
      <LoadingModal />
      <LogInSucceedModal
        closeCallBack={() => {
          dispatch(hideLogInSucceedModal());
          if (user.status === 'loggedIn') {
            navigation.navigate('Home');
          }
        }}
      />
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
