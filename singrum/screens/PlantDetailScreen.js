import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';

const PlantDetailScreen = () => {
  const route = useRoute();
  const data = route?.params?.detail;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{paddingBottom: 88}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.img}></View>
        <View style={styles.context}>
          <View style={styles.titleWrap}>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.date}>{data.date}</Text>
          </View>
          <View style={styles.infoWrap}>
            <Text style={styles.title}>원산지</Text>
            <Text style={styles.data}>
              멕시코남부, 파나마, 중앙 아메리카(과테말라)
            </Text>
          </View>
          <View style={styles.infoWrap}>
            <Text style={styles.title}>생장높이(cm)</Text>
            <Text style={styles.data}>150</Text>
          </View>
          <View style={styles.infoWrap}>
            <Text style={styles.title}>생장넓이(cm)</Text>
            <Text style={styles.data}>100</Text>
          </View>
          <View style={styles.infoWrap}>
            <Text style={styles.title}>번식시기</Text>
            <Text style={styles.data}>여름</Text>
          </View>
          <View style={styles.infoWrap}>
            <Text style={styles.title}>잎형태</Text>
            <View>
              <Text style={styles.data}>심장형 둥근모양</Text>
              <Text style={styles.data}>깃털처럼 갈라지고 군데군데 구멍</Text>
              <Text style={styles.data}>광택</Text>
            </View>
          </View>
          <View style={[styles.infoWrap, {flexDirection: 'column'}]}>
            <Text style={styles.title}>정보</Text>
            <Text style={[styles.data, {marginHorizontal: 0}]}>
              몬스테라는 덩굴성 대형관엽식물로 6~8m 까지 자란다. 잎은 어긋나고
              성숙한 것은 지름 1m 정도이다. 잎은 진녹색으로 크고 광택이 나며
              잎맥 사이에 군데군데 타원형의 구멍이 …
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  context: {
    marginTop: 20,
    marginHorizontal: 25,
    // marginHorizontal: 33,
  },
  img: {
    width: '100%',
    height: 200,
    backgroundColor: 'gray',
  },
  titleWrap: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  infoWrap: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 2,
    // backgroundColor: 'yellow',
  },
  name: {
    fontSize: 21,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#444b54',
    fontWeight: 300,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    // backgroundColor: 'blue',
    minHeight: 15,
  },
  data: {
    fontSize: 15,
    fontWeight: 300,
    marginHorizontal: 5,
    // backgroundColor: 'red',
  },
});

export default PlantDetailScreen;
