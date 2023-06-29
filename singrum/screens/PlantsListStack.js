import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import PlantsListScreen from './PlantsListScreen';
import PlantsDetailScreen from './PlantsDetailScreen';
import Header from '../components/Header';
import SearchScreen from './SearchScreen';

const Stack = createNativeStackNavigator();

const PlantsListStack = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => <Header />}}>
      <Stack.Screen name="PlantsListScreen" component={PlantsListScreen} />
      <Stack.Screen name="PlantsDetailScreen" component={PlantsDetailScreen} />
      <Stack.Screen
        options={{headerShown: false}}
        name="SearchScreen"
        component={SearchScreen}
      />
    </Stack.Navigator>
  );
};

export default PlantsListStack;
