import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser
      }}>
      {children}
    </AuthContext.Provider>
  );
};
