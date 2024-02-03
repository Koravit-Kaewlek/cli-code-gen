function generate({ name, Name }) {
  return `
const mongoose = require("mongoose");
const { Schema } = mongoose;

const ${name}Schema = new Schema({},{ timestamps: true });

const ${Name}Model = mongoose.model('${name}', ${name}Schema, '${name}');

module.exports = ${Name}Model;
`;
}
module.exports = { generate };
