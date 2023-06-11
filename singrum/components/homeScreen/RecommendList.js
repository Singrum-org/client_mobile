import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, FlatList, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import CardListItem from '../PlantsListScreen/CardListItem';

const width = Dimensions.get('screen').width;

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

const RecommendList = ({title}) => {
  const [cards, setCards] = useState(data);

  useEffect(() => {
    const sortedData = [...cards];
    if (title === 'NEW')
      sortedData.sort((a, b) => new Date(b.date) - new Date(a.date));
    else sortedData.sort((a, b) => b.likes - a.likes);
    setCards(sortedData);
  }, []);

  return (
    <View style={styles.recommendList}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        style={styles.list}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        horizontal={true}
        data={cards}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <CardListItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  recommendList: {
    marginTop: 15,
    marginBottom: 5,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  title: {
    marginHorizontal: 15,
    fontSize: 20,
  },
  list: {
    // flexGrow: 1,
    paddingHorizontal: 5,
    // paddingRight: 10,
  },
});

export default RecommendList;
