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
          <Text style={styles.searchText}>식물을 검색해 보세요.</Text>
          <FeatherIcon name="search" size={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
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
    margin: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  cardContainer: {
    flex: 1,
    marginBottom: 0,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    marginRight: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: 'rgb(25,25,25)',
    backgroundColor: 'white',
    borderColor: '#888',
    borderWidth: 1,
  },
  selectedButton: {
    marginRight: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(158,211,106,0.1)',
    borderColor: 'rgb(121,170,65)',
    borderWidth: 1,
  },
  buttonText: {
    color: 'rgb(25,25,25)',
    fontSize: 13,
    fontWeight: 'bold',
  },
  selectedButtonText: {
    color: 'rgb(121,170,65)',
    fontSize: 13,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  searchButton: {
    backgroundColor: '#fff',
    width: 200,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
