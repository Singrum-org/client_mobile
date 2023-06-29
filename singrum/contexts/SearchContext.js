const {createContext, useState} = require('react');

const searchContext = createContext();

export function SearchContextProvider({children}) {
  const [keyword, onChangeText] = useState('');
  return (
    <searchContext.Provider value={{keyword, onChangeText}}>
      {children}
    </searchContext.Provider>
  );
}

export default searchContext;
