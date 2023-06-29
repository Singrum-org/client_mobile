import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {View, Text, StyleSheet, Button, Pressable} = require('react-native');

function History({keyword}) {
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    loadRecentSearches();
  }, []);

  const loadRecentSearches = async () => {
    try {
      const searches = await AsyncStorage.getItem('recentSearches');
      if (searches !== null) {
        const uniqueSearches = Array.from(new Set(JSON.parse(searches)))
        setRecentSearches(uniqueSearches);
      }
    } catch (error) {
      console.log('Failed to load recent searches', error);
    }
  };

  const deleteRecentSearch= async (search) => {
    try {
      const updateSearches = recentSearches.filter((item) => item !== search);
      await AsyncStorage.setItem('recentSearches', JSON.stringify(updateSearches));
      setRecentSearches(updateSearches);
    } catch (error) {
      console.log('Failed to delete recent searches', error)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>최근 검색어</Text>
      <View>
      {recentSearches.map((search, index) => (
        <View style={styles.searchItemContainer} key={index} >
          <Text style={styles.searchItemText}>
            {search}
          </Text>
          <Pressable
            style={({pressed}) => [
              styles.cancelButton,
              pressed && {opacity: 0.5},
            ]}
            onPress={() => deleteRecentSearch(search)}>
            <MaterialIcons name="cancel" size={18} color="#aaa" />
          </Pressable>
        </View>
      ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 29,
    marginTop: 20,
  },
  title: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  searchItemText: {
    flex: 1,
    color: '#000',
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  cancelButton: {
    marginLeft: 5,
  }

});
export default History;
