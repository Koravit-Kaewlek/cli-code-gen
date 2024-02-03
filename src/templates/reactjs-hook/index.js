const capitalizeFirstLetter = require('../../libs/capitalizeFirstLetter');

function generate({ name, Name }, self, feature, config) {
  const funcName = `${Name}${capitalizeFirstLetter(self.type)}`;
  return `
import React, { createContext, useContext, useEffect, useState } from 'react';
const ${funcName}Context = createContext({});

export const ${funcName}ContextProvider = ({ children }) => {

  const store = {};

  return (
    <${funcName}Context.Provider value={store}>{children}</${funcName}Context.Provider>
  );
};

const use${funcName}Context = () => {
  return useContext(${funcName}Context);
};

export default use${funcName}Context;
  
`;
}
module.exports = { generate };
