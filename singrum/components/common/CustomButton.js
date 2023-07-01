import React from 'react';
import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';

const CustomButton = ({onPress = () => {}, title, hasMarginBottom}) => {
  return (
    <View
      style={[styles.block, styles.overflow, hasMarginBottom && styles.margin]}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => [
          styles.wrapper,
          Platform.OS === 'ios' && pressed && {opacity: 0.5},
        ]}
        android_ripple={{
          color: '#ffffff',
        }}>
        <Text style={[styles.text]}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  overflow: {
    borderRadius: 4,
    overflow: 'hidden',
  },
  wrapper: {
    borderRadius: 4,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#46a08f',
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  margin: {
    marginBottom: 8,
  },
});

export default CustomButton;
