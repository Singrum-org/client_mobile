import React from 'react';
import Swiper from 'react-native-swiper';
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  View,
  Pressable,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const width = Dimensions.get('window').width;

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.block}>
      <ScrollView>
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
        <View style={styles.recommendList}>
          <Text style={styles.title}>NEW</Text>
          <FlatList
            style={styles.list}
            contentContainerStyle={{flexGrow: 1}}
            horizontal={true}
            data={[1, 2, 3]}
            renderItem={() => <View style={styles.card}></View>}
          />
        </View>
        <View style={styles.recommendList}>
          <Text style={styles.title}>인기</Text>
          <FlatList
            style={styles.list}
            horizontal={true}
            data={[1, 2, 3, 4]}
            renderItem={() => <View style={styles.card}></View>}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
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
  recommendList: {
    marginTop: 15,
    marginBottom: 5,
    width: '100%',
    height: 180,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  title: {
    marginHorizontal: 15,
    fontSize: 20,
  },
  list: {
    flexGrow: 0,
    paddingHorizontal: 10,
    boxSixing: 'border-box',
    width: '100%',
    height: '85%',
  },
  card: {
    marginHorizontal: 5,
    width: 120,
    height: '100%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
  },
});

export default HomeScreen;
