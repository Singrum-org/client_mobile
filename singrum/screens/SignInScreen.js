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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useUserContext} from '../contexts/userContext';

const SignInScreen = () => {
  const navigation = useNavigation();
  const {user, setUser} = useUserContext();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const passwordRef = useRef();

  const onChangeTextHandler = name => value => {
    setForm({...form, [name]: value});
  };

  const onSubmitSignIn = async () => {
    try {
      Keyboard.dismiss();
      if (!form['email'].trim()) return;
      if (!form['password'].trim()) return;

      const {data: loginData} = await axios.post(
        `http://10.0.2.2:8080/api/user/signin`,
        form,
      );
      if (loginData.statusCode === 200) {
        await AsyncStorage.setItem('accessToken', loginData.data.accessToken);
        const {data} = await axios.post(
          'http://10.0.2.2:8080/api/user/auth',
          {},
          {
            headers: {Authorization: `Bearer ${loginData.data.accessToken}`},
          },
        );
        setUser(data);

        navigation.popToTop();
      } else {
        console.log(loginData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onOpenSignUpScreen = useCallback(() => {
    navigation.push('SignUpScreen', {});
  }, []);

  if (user) {
    return navigation.goBack();
  }

  return (
    <KeyboardAvoidingView style={styles.keyboardAvoidingView}>
      <SafeAreaView style={styles.fullscreen}>
        <Image
          resizeMode="cover"
          style={[styles.logo]}
          source={require('../assets/logo_64.png')}></Image>
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
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <BorderedInput
            placeholder={'비밀번호'}
            onChangeText={onChangeTextHandler('password')}
            secureTextEntry
            maxLength={20}
            ref={passwordRef}
            returnKeyType={'done'}
            onSubmitEditing={() => {
              onSubmitSignIn();
            }}
          />
          <View style={styles.buttons}>
            <CustomButton
              title="로그인"
              hasMarginBottom
              onPress={onSubmitSignIn}></CustomButton>
            <CustomButton
              title="회원가입"
              hasMarginBottom
              onPress={onOpenSignUpScreen}></CustomButton>
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

export default SignInScreen;
