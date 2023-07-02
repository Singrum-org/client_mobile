import React, {createContext, useContext, useState} from 'react';

const UserContext = createContext(null);

export const UserContextProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error('UserContext.Proider를 찾을 수 없습니다.');
  }
  return userContext;
};
