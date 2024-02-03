const capitalizeFirstLetter = require('../../libs/capitalizeFirstLetter');

function generate({ name }, self) {
  return `
function ${name}${capitalizeFirstLetter(self.type)}() {
  return;
}

module.exports = ${name}${capitalizeFirstLetter(self.type)};
`;
}
module.exports = { generate };
