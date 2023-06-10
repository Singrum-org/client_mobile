import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from './HomeScreen';
import PlantsListStack from './PlantsListStack';
import CommunityScreen from './CommunityScreen';
import Header from '../components/Header';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#6200ee',
        header: () => <Header />,
        headerStyle: {margin: 0},
      }}>
      <Tab.Screen
        name="PlantsListStack"
        options={{headerShown: false}}
        component={PlantsListStack}
      />
      <Tab.Screen name="HomeScreen" component={HomeScreen} index />
      <Tab.Screen name="CommunityScreen" component={CommunityScreen} />
    </Tab.Navigator>
  );
};

export default MainTab;
