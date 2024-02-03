// const capitalizeFirstLetter = require('../../libs/capitalizeFirstLetter');

function generate({ name, Name }, self, feature, config) {
  const funcName = `${Name}`;
  return `
import React from 'react'

const ${funcName} = () => {
  return (
    <div>${funcName}</div>
  )
}

export default ${funcName}
`;
}
module.exports = { generate };
