import React, {useCallback} from 'react';
import {Pressable, StyleSheet, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const BannerItem = ({item}) => {
  const navigation = useNavigation();

  const onPress = useCallback(() => {
    if ('screen' in item.onPress) {
      navigation.navigate(item.onPress.screen, {
        ...item.onPress.option,
      });
    }
  }, [item]);

  return (
    <Pressable style={styles.banner} onPress={onPress}>
      <Image style={styles.img} source={item.img} />
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.info}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  banner: {
    flex: 1,
    position: 'relative',
    // backgroundColor: '#9DD6EB',
    marginHorizontal: 13,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#9DD6EB',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.3,
  },
  title: {
    fontSize: 30,
  },
});

export default BannerItem;
