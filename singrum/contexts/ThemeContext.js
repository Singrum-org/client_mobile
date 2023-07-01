import {createContext, useState, useEffect, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {
  const [currentTheme, setCurrentTheme] = useState(true);

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const theme = await AsyncStorage.getItem('theme');
        if (theme !== null) setCurrentTheme(theme === 'light');
      } catch (error) {
        console.log('Default Theme Light');
      }
    };
    loadTheme();
  }, []);

  const changeCurrentTheme = useCallback(
    value => {
      setCurrentTheme(value);
      AsyncStorage.setItem('theme', value ? 'light' : 'dark');
    },
    [currentTheme],
  );

  return (
    <ThemeContext.Provider value={{currentTheme, changeCurrentTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
