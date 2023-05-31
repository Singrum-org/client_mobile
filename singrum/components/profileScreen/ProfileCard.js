import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ProfileCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileCircle}></View>
      <View style={styles.profileDescriptionWrapper}>
        <Text style={styles.profileNickname}>Ohjoo</Text>
        <Text style={styles.profileEmail}>brb1111@naver.com</Text>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 24,
  },
  profileCircle: {
    backgroundColor: '#cdcdcd',
    borderRadius: 64,
    width: 96,
    height: 96,
  },
  profileDescriptionWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  profileNickname: {
    fontSize: 24,
    color: '#000',
  },
  profileEmail: {
    marginTop: 10,
    fontSize: 14,
    color: '#757575',
  },
});

export default ProfileCard;
