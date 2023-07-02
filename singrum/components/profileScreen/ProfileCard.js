import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import Avatar from '../common/Avatar';
import {useUserContext} from '../../contexts/userContext';

const ProfileCard = () => {
  const navigation = useNavigation();
  const {user} = useUserContext();

  const onOpenEditProfile = useCallback(() => {
    navigation.push('EditProfileScreen', {});
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.profileWrapper}>
        <Avatar size={72} />
        <View style={styles.profileDescriptionWrapper}>
          <Text style={styles.profileNickname}>{user?.nickname || '-'}</Text>
          <Text style={styles.profileEmail}>{user?.email || '-'}</Text>
        </View>
      </View>
      <View style={styles.editWrapper}>
        {user && (
          <TouchableOpacity
            style={[styles.editButton, {backgroundColor: '#46a08f'}]}
            onPress={onOpenEditProfile}>
            <FeatherIcons name="edit" color={'#fff'} size={22} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingVertical: 36,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  profileDescriptionWrapper: {
    justifyContent: 'center',
    marginLeft: 16,
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

  editWrapper: {
    marginTop: 10,
  },
  editButton: {
    padding: 6,
    flexDirection: 'row',
    borderRadius: 6,
    alignItems: 'center',
  },
  editButtonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default ProfileCard;
