import React, {useState} from 'react';
import {Image, Platform, Pressable, StyleSheet, Text, View} from 'react-native';

function CardListItem({item}) {
  const [isHeart, setIsHeart] = useState(false);
  const [likes, setLikes] = useState(item.likes);

  const handlePressHeart = () => {
    setIsHeart(!isHeart);
    setLikes((prevLikes) => (prevLikes === item.likes ? prevLikes + 1 : prevLikes - 1));
  };

  return (
    <Pressable
      style={({pressed}) => [
        styles.container,
        Platform.OS === 'ios' && pressed && {backgroundColor: '#efefef'},
      ]}
      android_ripple={{color: '#ededed'}}>
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={require('../../assets/plant_sample.jpg')}
          />
        </View>
        <View style={styles.detailContainer}>
          <View style={styles.cardLeft}>
            <Text
              style={styles.cardTitle}
              numberOfLines={1}
              ellipsizeMode="tail">
              {item.name}
            </Text>
            <Text style={styles.cardDate}>{item.date}</Text>
          </View>
          <Pressable onPress={handlePressHeart}>
            <View style={styles.cardRight}>
              <Image
                style={styles.heart}
                source={
                  isHeart
                    ? require('../../assets/full-heart.png')
                    : require('../../assets/heart.png')
                }
              />
              <Text style={styles.cardLikes}>{likes}</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}

export default CardListItem;

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 160,
    marginRight: 12,
    marginBottom: 12,
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 160,
    backgroundColor: 'red',
    height: 96,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    resizeMode: 'contain',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 1,
  },
  detailContainer: {
    paddingTop: 10,
    paddingRight: 14,
    paddingBottom: 14,
    paddingLeft: 19,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardLeft: {
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 12,
    maxWidth: 90,
    fontWeight: 'bold',
  },
  cardDate: {
    fontSize: 8,
    fontWeight: 300,
    marginTop: 4,
    color: '#444b54',
  },
  cardRight: {
    width: 32,
    height: 40,
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
    fontSize: 8,
    color: '#444b54',
  },
  heart: {
    width: 13.5,
    height: 12,
    marginBottom: 6,
  },
});
