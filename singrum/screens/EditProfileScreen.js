import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import EditProfileCard from '../components/editProfileScreen/EditProfileCard';
import EditInputList from '../components/editProfileScreen/EditInputList';
import {KeyboardAvoidingView, StyleSheet} from 'react-native';

const EditProfileScreen = () => {
  return (
    <KeyboardAvoidingView
      style={styles.KeyboardAvoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView>
        <EditProfileCard />
        <EditInputList />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  KeyboardAvoidingView: {
    flex: 1,
  },
});

export default EditProfileScreen;
