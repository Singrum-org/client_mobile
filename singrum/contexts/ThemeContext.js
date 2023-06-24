import {createContext, useState} from 'react';

const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {
  const [currentTheme, setCurrentTheme] = useState(true);

  return (
    <ThemeContext.Provider value={{currentTheme, setCurrentTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
