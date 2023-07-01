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

const SignUpScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.keyboardAvoidingView}>
      <SafeAreaView style={styles.fullscreen}>
        <View style={styles.logo}></View>
        <View style={styles.form}>
          <BorderedInput isBottom></BorderedInput>
          <BorderedInput isBottom></BorderedInput>
          <BorderedInput isBottom></BorderedInput>
          <BorderedInput isBottom></BorderedInput>
          <BorderedInput></BorderedInput>
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
