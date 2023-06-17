import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, View, Button} from 'react-native';
import CardList from '../components/PlantsListScreen/CardList';
import {useNavigation} from '@react-navigation/native';

const PlantsListScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
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
