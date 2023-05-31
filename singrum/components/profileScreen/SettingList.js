import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SettingItem from './SettingItem';

const SettingList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.settingTitleWrapper}>
        <Text style={styles.settingTitle}>PREFERENCES</Text>
      </View>
      <View style={styles.settingWrapper}>
        <SettingItem name={'언어'} />
        <SettingItem name={'다크 모드'} />
        <SettingItem name={'로그아웃'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  settingTitleWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 16,
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

export default SettingList;
