import React, {useState} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Swiper from 'react-native-swiper';

import BackgroundImage from '../../assets/shine-stephania-plant-in-pink-pot.png';

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
  const theme = useTheme();

  return (
    <View style={styles.wrapper}>
      <Swiper
        showsButtons={false}
        autoplay
        loop
        activeDotColor={theme.colors.main}
        paginationStyle={{bottom: 10}}>
        {data.map(item => (
          <BannerItem key={item.id} item={item} />
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    width: '100%',
    height: 120,
  },
});

export default BannerList;
