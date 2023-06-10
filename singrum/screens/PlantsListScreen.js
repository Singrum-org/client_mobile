import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, Text, View, Text, Button} from 'react-native';
import CardListItem from '../components/PlantsListScreen/CardListItem';
import CardList from '../components/PlantsListScreen/CardList';
import {useNavigation} from '@react-navigation/native';


const PlantsListScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardListContainer}>
        <CardList />
      </View>
      <Button
        title="디테일 버튼"
        onPress={() => navigation.push('PlantsDetailScreen', {detail: true})}
      />
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
