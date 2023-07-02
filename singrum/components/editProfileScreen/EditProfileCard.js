import React, {useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Avatar from '../common/Avatar';
import {useUserContext} from '../../contexts/userContext';

const EditProfileCard = () => {
  const {user, setUser} = useUserContext();

  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <Avatar size={96} />
        <View style={styles.avatarEdit}>
          <FontAwesome name="camera" color="white" size={12} />
        </View>
      </View>
      <View style={styles.profileDescriptionWrapper}>
        <Text style={styles.profileNickname}>{user?.nickname}</Text>
        <Text style={styles.profileEmail}>{user?.email}</Text>
      </View>
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
  avatarWrapper: {
    position: 'relative',
  },
  avatarEdit: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 24,
    height: 24,
    backgroundColor: '#03c04a',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
  },
});
export default EditProfileCard;
