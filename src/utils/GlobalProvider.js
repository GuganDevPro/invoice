import React, { createContext, useState, useContext } from 'react';

// Create a Context
const GlobalContext = createContext();

// Context Provider component
export const GlobalProvider = ({ children }) => {
  const [captchaValue, setCaptchaValue] = useState(""); 
  const [sideBarOptions, setSideBarOptions] = useState(""); 

  return (
    <GlobalContext.Provider value={{ captchaValue, setCaptchaValue, sideBarOptions, setSideBarOptions }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook for easy access to context
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
