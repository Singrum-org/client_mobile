import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import ProfileScreen from './ProfileScreen';
import HomeScreen from './HomeScreen';
import PlantsListScreen from './PlantsListScreen';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#6200ee',
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="PlantsListScreen" component={PlantsListScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainTab;
