import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Swiper from 'react-native-swiper';

import BackgroundImage from '../../assets/banner.jpeg';

import BannerItem from './BannerItem';

const data = [
  {
    id: 1,
    title: 'Singrum',
    info: '싱그럼 오픈 예정',
    img: BackgroundImage,
    onPress: () => {},
  },
  {
    id: 2,
    title: 'Singrum',
    info: '싱그럼 투자자 모집',
    img: BackgroundImage,
    onPress: () => {},
  },
  {
    id: 2,
    title: 'Singrum',
    info: '싱그럼 디자이너 모집',
    img: BackgroundImage,
    onPress: () => {},
  },
  {
    id: 3,
    title: 'Singrum',
    info: '싱그럼 테스터 모집',
    img: BackgroundImage,
    onPress: () => {},
  },
  {
    id: 4,
    title: 'Summer, Singrum',
    info: '올 여름, 싱그러운 식물 알아보기',
    img: BackgroundImage,
    onPress: {
      screen: 'PlantsListStack',
      //   option: {
      //     initial: false,
      //     screen: 'PlantsDetailScreen',
      //     params: {
      //       detail: true,
      //     },
      //   },
    },
  },
];

const BannerList = () => {
  return (
    <View style={styles.wrapper}>
      <Swiper showsButtons={false} autoplay loop dotStyle={{top: 0}}>
        {data.map(item => (
          <BannerItem key={item.id} item={item} />
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default BannerList;
