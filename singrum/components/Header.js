import React, {useContext, useCallback} from 'react';
import {SafeAreaView, View, StyleSheet, Image, Pressable} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {Switch} from 'react-native-switch';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import ThemeContext from '../contexts/ThemeContext';

const Header = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {currentTheme, changeCurrentTheme} = useContext(ThemeContext);

  const toggleTheme = useCallback(() => {
    changeCurrentTheme(!currentTheme);
  }, [currentTheme]);

  return (
    <SafeAreaView>
      <View style={styles.block}>
        <View style={styles.left}>
          {route?.params?.detail && (
            <Pressable style={styles.before} onPress={() => navigation.pop()}>
              <AntDesignIcon name="arrowleft" size={20} />
            </Pressable>
          )}
          {!route?.params?.detail && (
            <>
              <Image
                style={styles.logo}
                source={require('../assets/logo.png')}
              />
              <Image
                style={styles.title}
                source={require('../assets/singrum.png')}
              />
            </>
          )}
        </View>
        <View style={styles.right}>
          <Switch
            value={currentTheme}
            onValueChange={toggleTheme}
            circleSize={25}
            barHeight={25}
            circleBorderWidth={1}
            switchWidthMultiplier={2}
            activeText={'☀️'}
            inActiveText={'🌙'}
            innerCircleStyle={
              currentTheme ? {marginRight: 10} : {marginLeft: 10}
            }
            changeValueImmediately={true}
            backgroundActive={'#ffffff'}
            backgroundInactive={'#444b54'}
            circleActiveColor={'#d0d0d0'}
            circleInActiveColor={'#d0d0d0'}
            circleBorderActiveColor={'#c1c1c1'}
            circleBorderInactiveColor={'#c1c1c1'}
            switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
            switchRightPx={2} // denomina
          />
          <Pressable onPress={() => navigation.push('ProfileScreen')}>
            <Image
              style={styles.profile}
              source={require('../assets/profile.png')}
              resizeMode="cover"
            />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {
    width: '100%',
    height: 48,
    paddingVertical: 8,
    paddingHorizontal: 25,
    // paddingHorizontal: 33,
    // backgroundColor: 'white',
    // marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    width: 80,
    height: 23,
    resizeMode: 'cover',
  },
  before: {
    marginLeft: -10,
    marginRight: 11,
  },
  logo: {
    width: 28,
    height: 28,
    marginRight: 11,
    // backgroundColor: 'red',
    resizeMode: 'contain',
  },
  profile: {
    width: 40,
    height: 40,
    marginLeft: 16,
    // backgroundColor: 'red',
  },
});

export default Header;
