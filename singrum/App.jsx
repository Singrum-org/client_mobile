import React, {useContext} from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import RootStack from './screens/RootStack';
import ThemeContext, {ThemeContextProvider} from './contexts/ThemeContext';
import {PlantsContextProvider} from './contexts/PlantsContext';
import {SearchContextProvider} from './contexts/SearchContext';

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
    text: '#ffffff',
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
      <PlantsContextProvider>
        <SearchContextProvider>
          <RootStack></RootStack>
        </SearchContextProvider>
      </PlantsContextProvider>
    </NavigationContainer>
  );
};

export default App;
