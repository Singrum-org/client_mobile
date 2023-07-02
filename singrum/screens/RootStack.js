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
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: '프로필',
        }}
      />
      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{
          title: '프로필 수정',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          title: '로그인',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignupScreen}
        options={{
          title: '회원가입',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
