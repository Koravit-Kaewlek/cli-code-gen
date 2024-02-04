function generate({ name }, self, feature, config) {
  return `
function generate({ name, Name }, self, feature, config) {
  return;
}
module.exports = { generate };
`;
}

module.exports = { generate };
