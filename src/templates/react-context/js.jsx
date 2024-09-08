import React, { createContext, useContext, useEffect, useState } from 'react';
const __Name__Context = createContext({});

export const __Name__ContextProvider = (props) => {

  const store = {};

  return (
    <__Name__Context.Provider value={store}>{props.children}</__Name__Context.Provider>
  );
};

const use__Name__Context = () => {
  return useContext(__Name__Context);
};

export default use__Name__Context;