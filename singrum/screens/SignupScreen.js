import React, {useCallback, useRef, useState} from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BorderedInput from '../components/common/BorderedInput';
import CustomButton from '../components/common/CustomButton';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useUserContext} from '../contexts/userContext';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const {user} = useUserContext();

  const [form, setForm] = useState({
    email: '',
    username: '',
    nickname: '',
    password: '',
    confirmPassword: '',
  });

  const emailRef = useRef();
  const usernameRef = useRef();
  const nicknameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const onChangeTextHandler = name => value => {
    setForm({...form, [name]: value});
  };

  const onSubmitSignUp = async () => {
    try {
      Keyboard.dismiss();

      if (!form['email'].trim()) return emailRef.current.focus();
      if (!form['username'].trim()) return usernameRef.current.focus();
      if (!form['nickname'].trim()) return nicknameRef.current.focus();
      if (!form['password'].trim()) return passwordRef.current.focus();
      if (!form['confirmPassword'].trim())
        return confirmPasswordRef.current.focus();

      if (form['confirmPassword'] !== form['password']) return;

      const {data} = await axios.post(
        `http://10.0.2.2:8080/api/user/signup`,
        form,
      );
      if (data.statusCode === 200) {
        navigation.goBack();
      } else {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (user) {
    return navigation.goBack();
  }

  return (
    <KeyboardAvoidingView style={styles.keyboardAvoidingView}>
      <SafeAreaView style={styles.fullscreen}>
        <Image style={styles.title} source={require('../assets/singrum.png')} />
        <View style={styles.form}>
          <BorderedInput
            isBottom
            placeholder={'이메일'}
            onChangeText={onChangeTextHandler('email')}
            autoCapitalize={'none'}
            autoCorrect={false}
            autoCompleteType="email"
            keyboardType="email-address"
            returnKeyType="next"
            maxLength={20}
            ref={emailRef}
            onSubmitEditing={() => usernameRef.current.focus()}
          />
          <BorderedInput
            isBottom
            placeholder={'사용자 이름'}
            onChangeText={onChangeTextHandler('username')}
            autoCapitalize={'none'}
            autoCorrect={false}
            autoCompleteType="username"
            keyboardType="default"
            returnKeyType="next"
            maxLength={20}
            ref={usernameRef}
            onSubmitEditing={() => nicknameRef.current.focus()}
          />
          <BorderedInput
            isBottom
            placeholder={'닉네임'}
            onChangeText={onChangeTextHandler('nickname')}
            autoCapitalize={'none'}
            autoCorrect={false}
            autoCompleteType="name"
            keyboardType="default"
            returnKeyType="next"
            maxLength={20}
            ref={nicknameRef}
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <BorderedInput
            isBottom
            placeholder={'비밀번호'}
            onChangeText={onChangeTextHandler('password')}
            secureTextEntry
            maxLength={20}
            returnKeyType="next"
            ref={passwordRef}
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
          />
          <BorderedInput
            placeholder={'비밀번호 확인'}
            onChangeText={onChangeTextHandler('confirmPassword')}
            secureTextEntry
            maxLength={20}
            ref={confirmPasswordRef}
            returnKeyType={'done'}
            onSubmitEditing={() => {
              onSubmitSignUp();
            }}
          />

          <View style={styles.buttons}>
            <CustomButton
              title="회원가입"
              hasMarginBottom
              onPress={onSubmitSignUp}
            />
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {flex: 1},
  fullscreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 64,
    height: 64,
  },
  form: {
    width: '100%',
    paddingHorizontal: 16,
    marginTop: 32,
  },
  buttons: {
    marginTop: 32,
  },
});

export default SignUpScreen;
