import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';

const PlantsDetailScreen = () => {
  const route = useRoute();
  const data = route?.params?.detail;

  return (
    <SafeAreaView>
      <View style={styles.img}></View>
      <Text style={styles.title}>{data.name}</Text>
      <Text style={styles.info}>{data.date}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 200,
    backgroundColor: 'gray',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default PlantsDetailScreen;
