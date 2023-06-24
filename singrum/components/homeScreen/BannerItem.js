import React, {useCallback} from 'react';
import {Pressable, StyleSheet, Image, Text, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

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
      <Image style={styles.img} source={item.img} resizeMode="stretch" />
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.info}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  banner: {
    flex: 1,
    width: windowWidth - 50,
    marginHorizontal: 25,
    borderRadius: 20,
    // borderColor: 'rgb(212,213,154)',
    backgroundColor: 'rgb(212,213,154)',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
  img: {
    position: 'absolute',
    width: '50%',
    height: '190%',
    // top: -107,
    right: -35,
    // backgroundColor: 'red',
    // left: '',
    // opacity: 0.3,
  },
  title: {
    fontSize: 30,
  },
});

export default BannerItem;
