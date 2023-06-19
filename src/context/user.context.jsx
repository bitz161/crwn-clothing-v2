import { createContext, useState, useEffect } from "react";

import {
  createUserDocumentFromAuth,
  onAuthStateChangedLister,
  signOutUser,
} from "../util/firebase/firebase.ulti";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubcribe = onAuthStateChangedLister((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      setCurrentUser(user);
    });
    return unsubcribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
