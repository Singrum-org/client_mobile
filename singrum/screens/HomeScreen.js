import React from 'react';
import Swiper from 'react-native-swiper';
import {
  // Dimensions,
  StyleSheet,
  View,
  Pressable,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// const width = Dimensions.get('window').width;

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.block}>
      <View style={styles.wrapper}>
        <Swiper showsButtons={false} autoplay loop dotStyle={{top: 0}}>
          <Pressable
            style={styles.banner}
            onPress={() =>
              navigation.navigate('PlantsDetailScreen', {detail: true})
            }>
            <Text>1</Text>
          </Pressable>
          <Pressable
            style={styles.banner}
            onPress={() => console.log('onPress')}>
            <Text>2</Text>
          </Pressable>
          <Pressable
            style={styles.banner}
            onPress={() => console.log('onPress')}>
            <Text>3</Text>
          </Pressable>
        </Swiper>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    paddingVertical: 15,
  },
  wrapper: {
    width: '100%',
    height: 170,
  },
  banner: {
    flex: 1,
    backgroundColor: '#9DD6EB',
    marginHorizontal: 13,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'black',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
