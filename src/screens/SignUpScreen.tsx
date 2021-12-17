import React, {useState} from 'react';
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
import {NoticeModal} from '../modals/NoticeModal';
import {useAppDispatch} from '../redux/hooks';
import {signUp} from '../redux/slices/userSlice';
import {signUpValidator} from '../utils/signUpValidator';

export const SignUpScreen = () => {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState<null | string>('');

  const dispatch = useAppDispatch();

  const handleSignUp = () => {
    const [isValid, errorMessage] = signUpValidator({
      lastName,
      firstName,
      phone,
      email,
      password,
      passwordCheck,
    });

    if (!isValid) {
      setModalMessage(errorMessage);
      setIsModalVisible(true);
      return;
    }

    dispatch(
      signUp({
        lastName,
        firstName,
        phone,
        email,
        password,
      }),
    );
  };

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
          <TextInput
            placeholder="Овог"
            style={styles.input}
            onChangeText={setLastName}
          />
          <TextInput
            placeholder="Нэр"
            style={styles.input}
            onChangeText={setFirstName}
          />
          <TextInput
            placeholder="Утас"
            style={styles.input}
            keyboardType="phone-pad"
            textContentType="telephoneNumber"
            autoComplete="tel"
            onChangeText={setPhone}
          />
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
          <TextInput
            placeholder="Нууц үг баталгаажуулах"
            style={styles.input}
            secureTextEntry={true}
            onChangeText={setPasswordCheck}
          />
        </View>
        <Pressable style={styles.loginButton} onPress={handleSignUp}>
          <Text>Бүртгүүлэх</Text>
        </Pressable>
      </ScrollView>
      <NoticeModal
        modalMessage={modalMessage}
        visible={isModalVisible}
        closeCallback={() => setIsModalVisible(false)}
      />
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
