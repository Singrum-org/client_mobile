import React from 'react';
import {SafeAreaView, View, StyleSheet, ScrollView} from 'react-native';

import BannerList from '../components/homeScreen/BannerList';
import RecommendList from '../components/homeScreen/RecommendList';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{paddingBottom: 88}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <BannerList />
        <View style={styles.context}>
          <RecommendList title="NEW" sort="newest" />
          <RecommendList title="인기" sort="likes" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  context: {
    marginHorizontal: 25,
    // marginHorizontal: 33,
  },
});

export default HomeScreen;
