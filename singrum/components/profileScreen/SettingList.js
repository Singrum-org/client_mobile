import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SettingItem from './SettingItem';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import {Switch} from 'react-native-switch';

const SettingList = () => {
  const [currentLanguage, setCurrentLanguage] = useState('kr');
  const [currentTheme, setCurrentTheme] = useState('light');
  const login = true;

  const toggleLanguage = useCallback(() => {
    if (currentLanguage === 'kr') {
      setCurrentLanguage('en');
    } else {
      setCurrentLanguage('kr');
    }
  }, [currentLanguage]);

  const toggleTheme = useCallback(() => {
    if (currentTheme === 'light') {
      setCurrentTheme('dark');
    } else {
      setCurrentTheme('light');
    }
  }, [currentTheme]);

  let settingComponent;
  if (login) {
    settingComponent = (
      <>
        <SettingItem
          icon={<MaterialIcons name="language" color={'#787276'} size={22} />}
          name={'언어'}
          subItem={
            <Switch
              value={currentLanguage === 'kr' ? true : false}
              onValueChange={toggleLanguage}
              circleSize={30}
              barHeight={30}
              circleBorderWidth={1}
              activeText={''}
              inActiveText={''}
              changeValueImmediately={true}
              backgroundActive={'#03c04a'}
              switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
              switchRightPx={2} // denomina
              renderInsideCircle={() => {
                let insideText;
                if (currentLanguage === 'kr') insideText = <Text>KR</Text>;
                else insideText = <Text>EN</Text>;
                return insideText;
              }}
            />
          }
        />
        <SettingItem
          icon={<FontAwesomeIcons name="moon-o" color={'#787276'} size={22} />}
          name={'다크 모드'}
          subItem={
            <Switch
              value={currentTheme === 'light' ? true : false}
              onValueChange={toggleTheme}
              circleSize={30}
              barHeight={30}
              circleBorderWidth={1}
              activeText={''}
              inActiveText={''}
              changeValueImmediately={true}
              backgroundActive={'#03c04a'}
              switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
              switchRightPx={2} // denomina
            />
          }
        />
        <SettingItem
          icon={<MaterialIcons name="logout" color={'#787276'} size={22} />}
          name={'로그아웃'}
        />
      </>
    );
  } else {
    <>
      <SettingItem
        icon={<MaterialIcons name="language" color={'#787276'} size={22} />}
        name={'언어'}
      />
      <SettingItem
        icon={<FontAwesomeIcons name="moon-o" color={'#787276'} size={22} />}
        name={'다크 모드'}
      />
      <SettingItem
        icon={<MaterialIcons name="logout" color={'#787276'} size={22} />}
        name={'로그인/회원가입'}
      />
    </>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.settingTitleWrapper}>
        <Text style={styles.settingTitle}>설정</Text>
      </View>
      <View style={styles.settingWrapper}>{settingComponent}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  settingTitleWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  settingTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  settingWrapper: {
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
});

export default SettingList;
