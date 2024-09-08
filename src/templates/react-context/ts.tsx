import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the shape of your context data
interface __Name__ContextType {
  // Define your context properties here (e.g., store, methods, etc.)
}

// Define the default value for the context
const __Name__Context = createContext<__Name__ContextType | undefined>(undefined);

interface __Name__ContextProviderProps {
  children: ReactNode;
}

export const __Name__ContextProvider: React.FC<__Name__ContextProviderProps> = (props) => {
  // Define the store object or any state management logic here
  const store: __Name__ContextType = {
    // Add your store properties here
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
