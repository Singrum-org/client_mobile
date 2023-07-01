import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MainTab from './MainTab';
import ProfileScreen from './ProfileScreen';
import EditProfileScreen from './EditProfileScreen';
import SignInScreen from './SignInScreen';
import SignupScreen from './SignupScreen';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignupScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
