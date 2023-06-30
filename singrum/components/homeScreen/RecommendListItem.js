import React, {useState} from 'react';
import {Pressable, View, StyleSheet, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const RecommendListItem = ({item}) => {
  const [isHeart, setIsHeart] = useState(false);
  const navigation = useNavigation();

  return (
    <Pressable
      style={({pressed}) => [
        styles.container,
        Platform.OS === 'ios' && pressed && {backgroundColor: '#efefef'},
      ]}
      android_ripple={{color: '#ededed'}}
      onPress={() =>
        navigation.navigate('PlantsListStack', {
          initial: false,
          screen: 'PlantDetailScreen',
          params: {
            detail: item.id,
          },
        })
      }>
      <View style={styles.card}>
        <View style={styles.imgBox}>
          {(item?.imageUrl || item?.thumbImageUrl) && (
            <Image
              style={styles.img}
              source={{uri: item?.imageUrl || item?.thumbImageUrl}}
            />
          )}
          <Pressable onPress={() => setIsHeart(!isHeart)}>
            <Image
              style={styles.heart}
              source={
                isHeart
                  ? require('../../assets/full-heart.png')
                  : require('../../assets/heart.png')
              }
            />
          </Pressable>
        </View>
        <View style={styles.context}>
          <Text style={styles.name}>{item?.name}</Text>
          <Text style={styles.info} numberOfLines={1} ellipsizeMode="tail">
            {item?.functionality_info}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default RecommendListItem;

const styles = StyleSheet.create({
  card: {
    width: 140,
    height: 195,
    backgroundColor: 'red',
    borderRadius: 20,
    overflow: 'hidden',
  },
  imgBox: {
    width: '100%',
    height: 148,
    backgroundColor: '#f5f5f5',
  },
  img: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    // backgroundColor: '#f5f5f5',
  },
  heart: {
    position: 'absolute',
    top: 15,
    right: 15,
    width: 20,
    height: 17.8,
  },
  context: {
    width: '100%',
    height: 47,
    backgroundColor: '#ffffff',
    paddingHorizontal: 19,
    justifyContent: 'center',
  },
  name: {
    fontSize: 12,
    fontWeight: 500,
  },
  info: {
    fontSize: 8,
    color: '#444b54',
    fontWeight: 300,
  },
});
