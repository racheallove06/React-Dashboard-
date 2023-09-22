import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  return (
    //created my provider
    <StateContext.Provider
      value={{ activeMenu, setActiveMenu, isClicked, setIsClicked }}
    >
      {children}
    </StateContext.Provider>
  );
};
//using the activeMenu inside our app component
export const useStateContext = () => useContext(StateContext);
