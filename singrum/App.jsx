import React, { useContext } from 'react';
import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import RootStack from './screens/RootStack';
import ThemeContext, { ThemeContextProvider } from './contexts/ThemeContext';

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
    text: '#211809',
    background: '#2d2d2e',
    main: '#137166',
  },
};

function App() {
  return (
    <ThemeContextProvider>
      <Root />
    </ThemeContextProvider>
  );
}

const Root = () => {
  const {currentTheme} = useContext(ThemeContext);

  return (
    <NavigationContainer theme={currentTheme ? lightTheme : darkTheme}>
      <RootStack></RootStack>
    </NavigationContainer>
  );
}

export default App;
