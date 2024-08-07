"use-client"
import { Children } from '@/Types/Types';
import React, { createContext, ReactNode, useState } from 'react'


const AppContext = createContext<any>(undefined);
const ContextProvider: React.FC<Children> = ({ children }) => {


  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  );
};



export default ContextProvider