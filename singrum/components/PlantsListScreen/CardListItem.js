import React from 'react';
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

function CardListItem({item}) {
  const {width} = useWindowDimensions();
  const imgWidth = width / 2 - 50;

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
            style={[styles.img, {width: imgWidth}]}
            source={require('../../assets/plant_sample.jpg')}
          />
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.cardTitle} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
          <View style={styles.separator} />
          <View style={styles.cardFooter}>
            <Text style={styles.cardDate}>{item.date}</Text>
            <Text style={styles.cardLikes}>♥ {item.likes}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

export default CardListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth / 2 - 10,
    paddingHorizontal: 5,
    paddingTop: 5,
    alignSelf: 'center',
  },

  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  img: {
    height: 200,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  detailContainer: {
    marginTop: 10,
  },
  cardFooter: {
    
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardDate: {
    fontSize: 12,
    marginTop: 4,
    color: '#888',
  },
  cardLikes: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginTop: 10,
    marginBottom: 10,
  },
});
