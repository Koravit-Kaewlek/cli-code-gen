function generate({ name }) {
  return `
const mongoose = require("mongoose");
const { Schema } = mongoose;

const ${name}Schema = new Schema({},{ timestamps: true });

const ${name}Model = mongoose.model('${name}', ${name}Schema, '${name}');

module.exports = ${name}Model;
`;
}
module.exports = { generate };
