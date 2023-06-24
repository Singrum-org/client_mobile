import React, {useState, useCallback} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Pressable,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {Switch} from 'react-native-switch';

const Header = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [currentTheme, setCurrentTheme] = useState('light');

  const toggleTheme = useCallback(() => {
    if (currentTheme === 'light') {
      setCurrentTheme('dark');
    } else {
      setCurrentTheme('light');
    }
  }, [currentTheme]);

  return (
    <SafeAreaView>
      <View style={styles.block}>
        <View style={styles.left}>
          {route?.params?.detail && (
            <Button title="<" onPress={() => navigation.pop()} />
          )}
          <Image
            style={styles.title}
            source={require('../assets/singrum.png')}
            resizeMode="cover"
          />
        </View>
        <View style={styles.right}>
          <Switch
            value={currentTheme === 'light' ? true : false}
            onValueChange={toggleTheme}
            circleSize={25}
            barHeight={25}
            circleBorderWidth={1}
            switchWidthMultiplier={2}
            activeText={'☀️'}
            inActiveText={'🌙'}
            innerCircleStyle={
              currentTheme === 'light' ? {marginRight: 10} : {marginLeft: 10}
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
  },
  profile: {
    width: 40,
    height: 40,
    marginLeft: 16,
    // backgroundColor: 'red',
  },
});

export default Header;
