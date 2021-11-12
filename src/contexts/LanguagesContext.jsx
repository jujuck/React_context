import React, { createContext, useState } from 'react';

export const LangagesContext = createContext();

export const LangagesContextProvider = ({ children }) => {
  const [langues, setLangues] = useState('en');

  return (
    <LangagesContext.Provider value={{ langues, setLangues }}>
      {children}
    </LangagesContext.Provider>
  );
};
