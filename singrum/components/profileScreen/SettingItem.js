import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SettingItem = ({icon, name, subItem}) => {
  return (
    <View style={styles.container}>
      {/* TODO - 아이콘 넣기 vector icon 작업 */}
      <View style={styles.iconWithName}>
        {icon && <View style={styles.icon}>{icon}</View>}
        <Text style={styles.name}>{name}</Text>
      </View>
      <View>
        {/* TODO - sub item이 있으면 children 형태로 넣어주기 */}
        {subItem && <View style={styles.subWrapper}>{subItem}</View>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  iconWithName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    marginRight: 8,
    alignItems: 'center',
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  subWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SettingItem;
