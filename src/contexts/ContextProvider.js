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
  const [screenSize, setScreenSize] = useState(null);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSetting, setThemeSetting] = useState(false);

  const setMode = (e) => {
    setCurrentMode(e.target.value);

    localStorage.setItem("themeMode", e.target.value);
    setThemeSetting(false);
  };

  const setColor = (e) => {
    setCurrentColor(e.target.value);

    localStorage.setItem("colorMode", e.target.value);
    setThemeSetting(false);
  };
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };
  return (
    //created my provider//
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,

        currentMode,
        themeSetting,
        setThemeSetting,
        setMode,
        setColor,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
//using the activeMenu inside our app component
export const useStateContext = () => useContext(StateContext);
