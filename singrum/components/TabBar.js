import React from 'react';
import {SafeAreaView, View, StyleSheet, Pressable} from 'react-native';
import {useRoute, useNavigation, useTheme} from '@react-navigation/native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

// const windowWidth = Dimensions.get('window').width;

const Header = () => {
  const theme = useTheme();
  const route = useRoute();
  const navigation = useNavigation();
  const styles = styling(theme);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.block}>
        <Pressable onPress={() => navigation.navigate('PlantsListStack')}>
          <MaterialCommunityIcon name="flower-poppy" size={32} color={'#fff'} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('HomeScreen')}>
          <EntypoIcon name="home" size={32} color={'#fff'} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('CommunityScreen')}>
          <EntypoIcon name="slideshare" size={32} color={'#fff'} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styling = theme =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      // height: 100,
      height: 82,
      paddingHorizontal: 15,
    },
    block: {
      width: '100%',
      height: '82%',
      borderRadius: 40,
      // box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.2);
      backgroundColor: theme.colors.main,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    left: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      width: 80,
      height: 23,
    },
    profile: {
      width: 40,
      height: 40,
      // backgroundColor: 'red',
    },
  });

export default Header;
