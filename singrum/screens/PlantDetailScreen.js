import React, {useState, useEffect, useCallback} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import {useRoute} from '@react-navigation/native';

const PlantDetailScreen = () => {
  const route = useRoute();
  const [detail, setDetail] = useState();
  const [isHeart, setIsHeart] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://localhost:8080/api/plants/${route?.params?.detail}`,
        );
        console.log('res', res);
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await res.json();
        if (result) {
          const data = result.data;
          for (let key in data) {
            data[key] = data[key] === '' ? '-' : data[key];
          }
          setDetail(data);
        }
      } catch (error) {
        console.error('Error', error);
      }
    };
    fetchData();
  }, []);

  const formatDate = date => {
    const newDate = new Date(date);
    const formattedDate = newDate.toLocaleDateString('ko-KR');
    return formattedDate;
  };

  const handlePressHeart = useCallback(() => {
    setIsHeart(!isHeart);
    setLikes(prevLikes =>
      prevLikes === detail?.likes ? prevLikes + 1 : prevLikes - 1,
    );
  }, [isHeart]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{paddingBottom: 88}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.imgBox}>
          {detail?.imageUrl && (
            <Image style={styles.img} source={{uri: detail?.imageUrl}} />
          )}
          <Pressable onPress={handlePressHeart}>
            <View style={styles.heartBox}>
              <Image
                style={styles.heart}
                source={
                  isHeart
                    ? require('../assets/full-heart.png')
                    : require('../assets/heart.png')
                }
              />
              <Text style={styles.cardLikes}>{likes}</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.context}>
          <View style={styles.titleWrap}>
            <Text style={styles.name}>{detail?.name}</Text>
            <Text style={styles.date}>{formatDate(detail?.createdAt)}</Text>
          </View>
          <View style={styles.infoWrap}>
            <Text style={styles.title}>원산지</Text>
            <Text style={styles.data}>{detail?.origin}</Text>
          </View>
          <View style={styles.infoWrap}>
            <Text style={styles.title}>생장높이(cm)</Text>
            <Text style={styles.data}>{detail?.height}</Text>
          </View>
          <View style={styles.infoWrap}>
            <Text style={styles.title}>생장넓이(cm)</Text>
            <Text style={styles.data}>{detail?.area}</Text>
          </View>
          <View style={styles.infoWrap}>
            <Text style={styles.title}>번식시기</Text>
            <Text style={styles.data}>{detail?.breeding_season}</Text>
          </View>
          <View style={styles.infoWrap}>
            <Text style={styles.title}>잎형태</Text>
            <Text style={styles.data}>{detail?.leaf}</Text>
          </View>
          <View style={[styles.infoWrap, {flexDirection: 'column'}]}>
            <Text style={styles.title}>정보</Text>
            <Text style={[styles.data, {marginHorizontal: 0}]}>
              {detail?.functionality_info}
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
  imgBox: {
    width: '100%',
    height: 200,
    backgroundColor: 'gray',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  heartBox: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    width: 42,
    height: 60,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingTop: 8,
    paddingRight: 9.3,
    paddingBottom: 4,
    paddingLeft: 9.3,
  },
  cardLikes: {
    fontSize: 12,
    color: '#444b54',
  },
  heart: {
    width: '100%',
    height: 20,
    marginBottom: 6,
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
