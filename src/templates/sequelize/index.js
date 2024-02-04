function generate({ name, Name }, self, feature, config) {
  return `
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class ${Name} extends Model {}

${Name}.init(
  {},
  {
    sequelize,
    modelName: '${Name}',
  }
);

module.exports = ${Name};
`;
}
module.exports = { generate };
