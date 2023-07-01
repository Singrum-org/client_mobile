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

const SignInScreen = () => {
  const navigation = useNavigation();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const passwordRef = useRef();

  const onChangeTextHandler = name => value => {
    setForm({...form, [name]: value});
  };

  const onSubmitSignIn = () => {
    Keyboard.dismiss();
    console.log(form);
  };

  const onOpenSignUpScreen = useCallback(() => {
    navigation.push('SignUpScreen', {});
  }, []);

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
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <BorderedInput
            placeholder={'비밀번호'}
            onChangeText={onChangeTextHandler('password')}
            secureTextEntry
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
