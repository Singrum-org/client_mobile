import React, {useState} from 'react';
import {FlatList, StyleSheet, Dimensions, View} from 'react-native';
import CardListItem from './CardListItem';

const windowWidth = Dimensions.get('window').width;

function CardList() {
  const [data, setData] = useState([
    {
      id: 1,
      name: '해바라기',
      content: '해바라기 내용',
      date: '2023.05.06',
      likes: 10,
    },
    {
      id: 2,
      name: '장미',
      content: '장미 내용',
      date: '2022.08.06',
      likes: 8,
    },
    {
      id: 3,
      name: '튤립',
      content: '튤립 내용',
      date: '2022.07.06',
      likes: 6,
    },
    {
      id: 4,
      name: '국화',
      content: '국화 내용',
      date: '2022.10.06',
      likes: 4,
    },
  ]);
  const renderCardListItem = ({ item, index }) => {
    
    const marginTop = index % 2 === 0 ? 0 : 50; 
    

    return (
      <View style={ [styles.cardContainer, { marginTop }]}>
        <CardListItem item={item} />
      </View>
    );
  };
  return (
    <FlatList
      style={styles.container}
      data={data}
      // renderItem={({item}) => <CardListItem item={item}/>}
      renderItem={renderCardListItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapper}
    />
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
  },
  cardContainer: {
    flex: 1,
    // backgroundColor: 'red',
    marginBottom: 0,
  }
});
