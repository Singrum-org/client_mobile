import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import CardListItem from './CardListItem';
import {useNavigation} from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

function CardList() {
  const [cards, setCards] = useState([]);
  const [sorting, setSorting] = useState('newest');
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://10.0.2.2:8080/api/plants');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await res.json();
        if (result) {
          setCards(result.data);
        }
      } catch (error) {
        console.error('Error', error);
      }
    };
    fetchData();
  }, []);

  const sortData = sortType => {
    const sortedData = [...cards];

    switch (sortType) {
      case 'newest':
        sortedData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case 'likes':
        sortedData.sort((a, b) => b.likes - a.likes);
        break;
      case 'name':
        sortedData.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    setCards(sortedData);
  };

  const handleSort = sortType => {
    setSorting(sortType);
    sortData(sortType);
  };
  const getButtonStyle = sortType => {
    return sorting === sortType ? styles.selectedButton : styles.button;
  };

  const navigateToSearchScreen = () => {
    navigation.navigate('SearchScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity
          style={styles.searchButton}
          onPress={navigateToSearchScreen}>
          <Text style={styles.searchText}>검색어를 입력해주세요.</Text>
          <FeatherIcon name="search" size={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <FeatherIcon name="menu" size={20} color="#b7b4b4" />
        <TouchableOpacity
          style={getButtonStyle('newest')}
          onPress={() => handleSort('newest')}>
          <Text
            style={[
              styles.buttonText,
              sorting === 'newest' && styles.selectedButtonText,
            ]}>
            최신순
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={getButtonStyle('likes')}
          onPress={() => handleSort('likes')}>
          <Text
            style={[
              styles.buttonText,
              sorting === 'likes' && styles.selectedButtonText,
            ]}>
            좋아요순
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={getButtonStyle('name')}
          onPress={() => handleSort('name')}>
          <Text
            style={[
              styles.buttonText,
              sorting === 'name' && styles.selectedButtonText,
            ]}>
            이름순
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={cards}
        renderItem={({item}) => <CardListItem item={item} />}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
}

export default CardList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: 326,
    height: 40,
    marginTop: 8,
    marginBottom: 32,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
  },
  button: {
    width: 80,
    height: 24,
    marginVertical: 0,
    marginHorizontal: 5,
    paddingHorizontal: 12,
    borderRadius: 4,
    backgroundColor: '#f5f5f5',
    borderColor: '#888',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedButton: {
    width: 80,
    height: 24,
    marginVertical: 0,
    marginHorizontal: 5,
    paddingHorizontal: 12,
    borderRadius: 4,
    backgroundColor: '#0a5ca2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#585e66',
    fontSize: 12,
    fontWeight: 300,
  },
  selectedButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
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
