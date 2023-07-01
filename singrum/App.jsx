import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import RootStack from './screens/RootStack';
import {SearchContextProvider} from './contexts/SearchContext';

const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
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
      <SearchContextProvider>
        <RootStack></RootStack>
      </SearchContextProvider>
    </NavigationContainer>
  );
}

export default App;
