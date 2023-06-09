import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, Text, View} from 'react-native';
import CardListItem from '../components/PlantsListScreen/CardListItem';
import CardList from '../components/PlantsListScreen/CardList';

const PlantsListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>식물 리스트</Text>
      <View style={styles.cardListContainer}>
        <CardList />
      </View>
    </SafeAreaView>
  );
};

export default PlantsListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  cardListContainer: {
    flex: 1, 
  },
});
