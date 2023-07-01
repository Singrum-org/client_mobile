import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import CustomButton from '../common/CustomButton';

const EditInputList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputTitleWrapper}>
        <Text style={styles.settingTitle}>유저 네임</Text>
        <TextInput placeholder="유저 네임"></TextInput>
      </View>
      <CustomButton title="회원탈퇴" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
  },
  inputTitleWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  settingTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  settingWrapper: {
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
});

export default EditInputList;
