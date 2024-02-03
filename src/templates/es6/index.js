const capitalizeFirstLetter = require('../../libs/capitalizeFirstLetter');

function generate({ name }, self, structure, config) {
  return `
function ${name}${capitalizeFirstLetter(self.type)}() {
  return;
}

export default ${name}${capitalizeFirstLetter(self.type)};
`;
}
module.exports = { generate };
