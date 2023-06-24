import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from './HomeScreen';
import PlantsListStack from './PlantsListStack';
import CommunityScreen from './CommunityScreen';
import Header from '../components/Header';
import TabBar from '../components/TabBar';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBar={props => <TabBar {...props} />}
      screenOptions={{
        tabBarShowLabel: false,
        header: () => <Header />,
      }}>
      <Tab.Screen
        name="PlantsListStack"
        options={{
          headerShown: false,
        }}
        component={PlantsListStack}
      />
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="CommunityScreen" component={CommunityScreen} />
    </Tab.Navigator>
  );
};

export default MainTab;
