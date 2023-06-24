import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, FlatList, Dimensions} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import RecommendListItem from './RecommendListItem';

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
  const theme = useTheme();
  const styles = styling(theme);

  useEffect(() => {
    const sortedData = [...cards];
    if (title === 'NEW')
      sortedData.sort((a, b) => new Date(b.date) - new Date(a.date));
    else sortedData.sort((a, b) => b.likes - a.likes);
    setCards(sortedData);
  }, []);

  return (
    <View style={styles.recommendList}>
      <View style={styles.top}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{width: 20}} />}
        horizontal={true}
        data={cards}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <RecommendListItem item={item} />}
      />
    </View>
  );
};

const styling = theme =>
  StyleSheet.create({
    recommendList: {
      width: '100%',
      marginTop: 20,
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      // backgroundColor: theme.colors.main,
    },
    top: {
      width: '100%',
      height: 48,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default RecommendList;
