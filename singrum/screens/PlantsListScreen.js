import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CardList from '../components/plantsListScreen/CardList';
import {useNavigation} from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const PlantsListScreen = () => {
  const navigation = useNavigation();
  const navigateToSearchScreen = () => {
    navigation.navigate('SearchScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity
          style={styles.searchButton}
          onPress={navigateToSearchScreen}>
          <Text style={styles.searchText}>검색어를 입력해주세요.</Text>
          <FeatherIcon name="search" size={20} />
        </TouchableOpacity>
      </View>
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
    marginHorizontal: 29,
    alignItems: 'center',
  },
  cardListContainer: {
    flex: 1,
  },
  searchContainer: {
    width: 326,
    height: 40,
    marginTop: 12,
    marginBottom: 10,
    paddingHorizontal: 13,
  },
  searchText: {
    fontSize: 16,
    color: '#c7cace',
  },
  searchButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#4a4e52',
  },
});
