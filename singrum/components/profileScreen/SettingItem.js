import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const SettingItem = ({icon, name, subItem, onPress = () => {}}) => {
  return (
    <View>
      <Pressable style={styles.container} onPress={onPress}>
        <View style={styles.iconWithName}>
          {icon && <View style={styles.icon}>{icon}</View>}
          <Text style={styles.name}>{name}</Text>
        </View>
        <View>
          {subItem && <View style={styles.subWrapper}>{subItem}</View>}
        </View>
      </Pressable>
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
