import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View, Text, FlatList, Dimensions} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import RecommendListItem from './RecommendListItem';
import PlantsContext from '../../contexts/PlantsContext';

const RecommendList = ({title, sort}) => {
  const {plants, sortPlants} = useContext(PlantsContext);
  const [cards, setCards] = useState([]);
  const theme = useTheme();
  const styles = styling(theme);

  useEffect(() => {
    const cards = sortPlants(sort);
    setCards(cards);
  }, [plants]);

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
