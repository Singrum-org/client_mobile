import React from 'react';
import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import RootStack from './screens/RootStack';

const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#211809',
    background: '#ececec',
    main: '#137166',
  },
};

const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
  },
};

function App() {
  return (
    <NavigationContainer theme={true ? lightTheme : darkTheme}>
      <RootStack></RootStack>
    </NavigationContainer>
  );
}

export default App;
