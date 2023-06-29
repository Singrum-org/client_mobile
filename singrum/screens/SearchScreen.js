import {StyleSheet, Text, View} from 'react-native';
import SearchHeader from '../components/searchScreen/SearchHeader';
import {useContext, useState} from 'react';
import searchContext from '../contexts/SearchContext';
import History from '../components/searchScreen/History';

const SearchScreen = () => {
  const {keyword} = useContext(searchContext);

  return (
    <View style={styles.container}>
      <SearchHeader/>
      {/* <Text>{keyword}</Text> */}
      <History/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SearchScreen;