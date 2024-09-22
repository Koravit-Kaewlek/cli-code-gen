import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface __Name__ContextType {
}

const __Name__Context = createContext<__Name__ContextType | undefined>(undefined);

interface __Name__ContextProviderProps {
  children: ReactNode;
}

export const __Name__ContextProvider: React.FC<__Name__ContextProviderProps> = (props) => {
  
  const store: __Name__ContextType = {
  };

  return (
    <__Name__Context.Provider value={store}>
      {props.children}
    </__Name__Context.Provider>
  );
};

const use__Name__Context = (): __Name__ContextType => {
  const context = useContext(__Name__Context);
  if (!context) {
    throw new Error('use__Name__Context must be used within a __Name__ContextProvider');
  }
  return context;
};

export default use__Name__Context;
