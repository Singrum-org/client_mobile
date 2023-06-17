import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from './HomeScreen';
import PlantsListStack from './PlantsListStack';
import CommunityScreen from './CommunityScreen';
import Header from '../components/Header';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#6200ee',
        header: () => <Header />,
        headerStyle: {margin: 0},
      }}>
      <Tab.Screen
        name="PlantsListStack"
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            return (
              <MaterialCommunityIcon
                name="flower-poppy"
                size={24}
                color={'#000'}
              />
            );
          },
        }}
        component={PlantsListStack}
      />
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => {
            return <EntypoIcon name="home" size={24} color={'#000'} />;
          },
        }}
      />
      <Tab.Screen
        name="CommunityScreen"
        component={CommunityScreen}
        options={{
          tabBarIcon: ({color, size}) => {
            return <EntypoIcon name="slideshare" size={24} color={'#000'} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
