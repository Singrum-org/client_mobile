import {FlatList, Platform, Pressable, StyleSheet, View} from 'react-native';
import SearchHeader from '../components/searchScreen/SearchHeader';
import {useContext, useEffect, useState} from 'react';
import searchContext from '../contexts/SearchContext';
import History from '../components/searchScreen/History';
import EmptySearchResult from '../components/searchScreen/EmptySearchResult';
import CardListItem from '../components/plantsListScreen/CardListItem';
import {useNavigation} from '@react-navigation/native';

const SearchScreen = () => {
  const [data, setData] = useState([]);
  const {keyword} = useContext(searchContext);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      if (keyword.length === 0) {
        setData([]);
        return;
      }
      let param = encodeURIComponent(keyword);
      let url = 'http://10.0.2.2:8080/api/plants/search?name=' + param;
      console.log(url);
      try {
        const res = await fetch(url);
        const result = await res.json();
        if (result) {
          setData(result.data);
        }
      } catch (error) {
        console.error('Error', error);
      }
    };
    fetchData();
  }, [keyword]);

  return (
    <View style={styles.container}>
      <SearchHeader />
      {keyword.length === 0 && <History />}
      {keyword.length > 0 && (!data || data.length === 0) && (
        <EmptySearchResult type="NOT_FOUND" />
      )}
      <Pressable>
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.searchContainer}
          renderItem={({item}) => <CardListItem item={item} />}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    marginTop: 20,
    marginHorizontal: 29,
  },
});

export default SearchScreen;
