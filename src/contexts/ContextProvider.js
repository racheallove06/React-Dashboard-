import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setactiveMenu] = useState(true);
  return (
    //created my provider
    <StateContext.Provider value={{ activeMenu }}>
      {children}
    </StateContext.Provider>
  );
};
//using the activeMenu inside our app component
export const useStateContext = () => useContext(StateContext);