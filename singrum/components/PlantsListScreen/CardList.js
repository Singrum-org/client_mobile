import React, {useContext, useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import CardListItem from './CardListItem';
import FeatherIcon from 'react-native-vector-icons/Feather';
import PlantsContext from '../../contexts/PlantsContext';

const CardList = () => {
  const [cards, setCards] = useState([]);
  const [sorting, setSorting] = useState('createdAt');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://10.0.2.2:8080/api/plants?sort=${sorting}&pageSize=25`,
        );

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await res.json();
        console.log(result.data.length);
        if (result) {
          setCards(result.data);
        }
      } catch (error) {
        console.error('Error', error);
      }
    };
    fetchData();
  }, [sorting]);

  const handleSort = sortType => {
    setSorting(sortType);
  };

  const getButtonStyle = sortType => {
    return sorting === sortType ? styles.selectedButton : styles.button;
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <FeatherIcon name="menu" size={20} color="#b7b4b4" />
        <TouchableOpacity
          style={getButtonStyle('createdAt')}
          onPress={() => handleSort('createdAt')}>
          <Text
            style={[
              styles.buttonText,
              sorting === 'createdAt' && styles.selectedButtonText,
            ]}>
            최신순
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={getButtonStyle('view_count')}
          onPress={() => handleSort('view_count')}>
          <Text
            style={[
              styles.buttonText,
              sorting === 'view_count' && styles.selectedButtonText,
            ]}>
            조회순
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
};

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
});

export default CardList;
