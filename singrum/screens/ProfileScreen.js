import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProfileCard from '../components/profileScreen/ProfileCard';
import SettingList from '../components/profileScreen/SettingList';

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <ProfileCard />
      <SettingList />
    </SafeAreaView>
  );
};

export default ProfileScreen;
