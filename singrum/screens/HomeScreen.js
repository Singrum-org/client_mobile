import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';

import BannerList from '../components/homeScreen/BannerList';
import RecommendList from '../components/homeScreen/RecommendList';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <BannerList />
        <RecommendList title="NEW" />
        <RecommendList title="인기" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
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
