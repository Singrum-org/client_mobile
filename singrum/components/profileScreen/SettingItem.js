import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SettingItem = ({icon, name, isSub, subItem}) => {
  return (
    <View style={styles.container}>
      {/* TODO - 아이콘 넣기 vector icon 작업 */}
      {/* <View>{icon}</View> */}

      <Text style={styles.name}>{name}</Text>

      {/* TODO - sub item이 있으면 children 형태로 넣어주기 */}
      {/* {isSub && <View>{subItem}</View>} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 16,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
});

export default SettingItem;
