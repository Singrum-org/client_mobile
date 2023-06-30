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

const data = [
  {
    id: 1,
    name: '해바라기',
    content: '해바라기 내용',
    date: '2023-05-06',
    likes: 10,
  },
  {
    id: 2,
    name: '장미',
    content: '장미 내용',
    date: '2022-08-06',
    likes: 8,
  },
  {
    id: 3,
    name: '소나무야소나무야소나무야',
    content: '소나무 내용',
    date: '2015-05-05',
    likes: 6,
  },
  {
    id: 4,
    name: '국화',
    content: '국화 내용',
    date: '2020-01-06',
    likes: 12,
  },
];

function CardList() {
  const [cards, setCards] = useState(data);
  const [sorting, setSorting] = useState('newest');
  const navigation = useNavigation();

  useEffect(() => {
    sortData(sorting);
  }, [sorting]);

  const sortData = sortType => {
    const sortedData = [...cards];

    switch (sortType) {
      case 'newest':
        sortedData.sort((a, b) => new Date(b.date) - new Date(a.date));
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
          onPress={() => setSorting('newest')}>
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
          onPress={() => setSorting('likes')}>
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
          onPress={() => setSorting('name')}>
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
